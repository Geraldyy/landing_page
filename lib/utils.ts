import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Variants, Easing } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EASE_OUT: Easing = 'easeOut';

/** Fade-up motion variant factory */
export function fadeUpVariant(delay = 0, distance = 20): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT, delay },
    },
  };
}

/** Fade-in from right variant */
export function fadeRightVariant(delay = 0, distance = 24): Variants {
  return {
    hidden: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: EASE_OUT, delay },
    },
  };
}

