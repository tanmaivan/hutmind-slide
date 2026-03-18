// Shared Framer Motion animation variants
// Preset: Electric Studio — Confident, techy, clean

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerContainer = (stagger = 0.1, delayStart = 0.15) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delayStart,
    },
  },
});

export const slideInLeft = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const slideTransition = {
  enter: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 20,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : -12,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};
