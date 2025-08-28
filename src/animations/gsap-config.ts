// Resilient GSAP loader
// - Exports animation presets used across the app.
// - Exports a default `gsap` object that is a safe stub immediately.
// - Attempts a non-blocking dynamic import of the real GSAP and plugins and
//   patches the exported object when available.

type AnyObj = Record<string, any>;

export const defaultEase = 'power2.out';
export const defaultDuration = 1;

export const fadeInUp = {
  y: 50,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase,
};

export const fadeInLeft = {
  x: -50,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase,
};

export const fadeInRight = {
  x: 50,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase,
};

export const scaleIn = {
  scale: 0.8,
  opacity: 0,
  duration: defaultDuration,
  ease: defaultEase,
};

// Minimal GSAP-like stub so UI remains functional if GSAP isn't loaded yet.
const gsapStub: AnyObj = {
  from: () => {},
  to: () => {},
  utils: {
    toArray: (sel: string) => Array.from(document.querySelectorAll(sel)),
    random: (a: number, b: number) => Math.random() * (b - a) + a,
  },
  context: (fn: Function, scope?: any) => {
    try {
      fn.call(scope);
    } catch (_) {
      /* swallow */
    }
    return { revert: () => {} };
  },
  registerPlugin: () => {},
  config: () => {},
};

const exportedGsap: AnyObj = { ...gsapStub };

async function loadGsap() {
  try {
    // debug
    // eslint-disable-next-line no-console
    console.log('[gsap-config] starting dynamic import of gsap...');
    const mod: AnyObj = await import('gsap');
    const realGsap = mod.gsap || mod.default || mod;
    // eslint-disable-next-line no-console
    console.log('[gsap-config] gsap module loaded', !!realGsap);

    // Try load optional plugins; ignore errors if plugin not present
    const scrollTriggerMod = await import('gsap/ScrollTrigger').catch((e) => {
      // eslint-disable-next-line no-console
      console.warn('[gsap-config] ScrollTrigger import failed', e);
      return null;
    });
    const textPluginMod = await import('gsap/TextPlugin').catch((e) => {
      // eslint-disable-next-line no-console
      console.warn('[gsap-config] TextPlugin import failed', e);
      return null;
    });
    // eslint-disable-next-line no-console
    console.log('[gsap-config] plugin modules:', { scroll: !!scrollTriggerMod, text: !!textPluginMod });

    // copy over real gsap methods/properties
    Object.assign(exportedGsap, realGsap || {});

    // register plugins if available
    const plugins: any[] = [];
    if (scrollTriggerMod) plugins.push(scrollTriggerMod.ScrollTrigger || scrollTriggerMod.default || scrollTriggerMod);
    if (textPluginMod) plugins.push(textPluginMod.TextPlugin || textPluginMod.default || textPluginMod);

    if (typeof exportedGsap.registerPlugin === 'function' && plugins.length) {
      try {
        exportedGsap.registerPlugin(...plugins);
        // eslint-disable-next-line no-console
        console.log('[gsap-config] plugins registered');
      } catch (e) {
        // ignore registration errors
        // eslint-disable-next-line no-console
        console.warn('[gsap-config] GSAP plugin registration failed', e);
      }
    }

    // apply some sane defaults if provided
    try {
      exportedGsap.config?.({ nullTargetWarn: false, trialWarn: false });
    } catch (e) {
      // ignore
    }
  } catch (err) {
    // keep stub in place; don't crash the app
    // eslint-disable-next-line no-console
    console.warn('[gsap-config] GSAP dynamic import failed; animations disabled.', err);
  }
  // mark loaded state even on failure so awaiters continue
  try {
    (exportedGsap as AnyObj)._loaded = true;
  } catch (_) {}
}

// Kick off dynamic load but don't block module consumers. Also export a promise
// that resolves when the dynamic load completes so callers can wait for plugins.
export const ready: Promise<void> = loadGsap();

// default export is the exportedGsap object (may be patched after ready resolves)
export default exportedGsap;