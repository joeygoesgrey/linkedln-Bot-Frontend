/**
 * Typography utilities for consistent text styling throughout the application
 */

export const typography = {
  // Headings with Outfit font weights
  h1: 'font-sans text-4xl md:text-5xl font-bold tracking-tight',
  h2: 'font-sans text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'font-sans text-2xl md:text-3xl font-bold',
  h4: 'font-sans text-xl md:text-2xl font-bold',
  h5: 'font-sans text-lg md:text-xl font-semibold',
  h6: 'font-sans text-base md:text-lg font-semibold',
  
  // Body text with Outfit
  body1: 'font-sans text-base leading-relaxed font-light',
  body2: 'font-sans text-sm leading-relaxed font-light',
  
  // Special text
  lead: 'font-sans text-xl text-gray-600 font-light',
  small: 'font-sans text-sm text-gray-500',
  
  // Buttons
  button: 'font-sans font-medium text-base',
  buttonSmall: 'font-sans font-medium text-sm',
  
  // Navigation
  nav: 'font-sans font-medium text-gray-700 hover:text-primary-600 transition-colors',
  
  // Utility
  uppercase: 'font-sans uppercase tracking-wider text-xs font-semibold',
};

/**
 * Text color utilities
 */
export const textColor = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  muted: 'text-gray-500',
  accent: 'text-primary-600',
  white: 'text-white',
  error: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

/**
 * Font weight utilities for Outfit
 */
export const fontWeight = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

/**
 * Text alignment utilities
 */
export const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

/**
 * Line height utilities
 */
export const lineHeight = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};
