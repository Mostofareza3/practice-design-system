import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Fedgroup Complete Design System Color Utilities
 * Based on the official Fedgroup design system colors
 * Updated to match the current globals.css naming convention
 */
export const colors = {
  // Core Brand Colors (Primary Usage)
  brand: {
    primaryBrand: "text-primary-brand",      // #111C4D - FedBlue
    primaryCtas: "text-primary-ctas",        // #DE176D - FedPink
    warning: "text-warning",                 // #E5A000 - Warnings, highlights
    error: "text-error",                     // #CF1511 - Error, destructive actions
    success: "text-success",                 // #0F7A44 - Success, confirmation
    information: "text-information",         // #54616C - Info states, neutral UI elements
  },
  
  // Surface/Background Colors
  surface: {
    sectionBackground: "bg-section-background",  // #FAFAFA - Page or section backgrounds
    inputBackground: "bg-input-background",      // #F0F2FC - Input and form background
    pageNeutral: "bg-page-neutral",              // #F7F8F9 - Neutral UI elements
  },
  
  // Fedgroup Brand Color Families
  fedBlue: {
    50: "text-fedblue-50",
    100: "text-fedblue-100",
    200: "text-fedblue-200",
    300: "text-fedblue-300",
    400: "text-fedblue-400",
    500: "text-fedblue-500",
    600: "text-fedblue-600",
    700: "text-fedblue-700",
    800: "text-fedblue-800",
    900: "text-fedblue-900",
    950: "text-fedblue-950",
    default: "text-fedblue-default",
  },
  
  fedPink: {
    50: "text-fedpink-50",
    100: "text-fedpink-100",
    200: "text-fedpink-200",
    300: "text-fedpink-300",
    400: "text-fedpink-400",
    500: "text-fedpink-500",
    525: "text-fedpink-525",
    550: "text-fedpink-550",
    600: "text-fedpink-600",
    650: "text-fedpink-650",
    700: "text-fedpink-700",
    800: "text-fedpink-800",
    900: "text-fedpink-900",
    950: "text-fedpink-950",
    default: "text-fedpink-default",
  },
  
  fedGrey: {
    50: "text-fedgrey-50",
    100: "text-fedgrey-100",
    200: "text-fedgrey-200",
    300: "text-fedgrey-300",
    400: "text-fedgrey-400",
    500: "text-fedgrey-500",
    600: "text-fedgrey-600",
    700: "text-fedgrey-700",
    800: "text-fedgrey-800",
    900: "text-fedgrey-900",
    950: "text-fedgrey-950",
    default: "text-fedgrey-default",
  },
  
  fedOrange: {
    50: "text-fedorange-50",
    100: "text-fedorange-100",
    200: "text-fedorange-200",
    300: "text-fedorange-300",
    400: "text-fedorange-400",
    500: "text-fedorange-500",
    600: "text-fedorange-600",
    700: "text-fedorange-700",
    800: "text-fedorange-800",
    900: "text-fedorange-900",
    950: "text-fedorange-950",
    default: "text-fedorange-default",
  },
  
  // Standard Color Families
  blue: {
    50: "text-blue-50",
    100: "text-blue-100",
    200: "text-blue-200",
    300: "text-blue-300",
    400: "text-blue-400",
    500: "text-blue-500",
    600: "text-blue-600",
    700: "text-blue-700",
    800: "text-blue-800",
    900: "text-blue-900",
    950: "text-blue-950",
  },
  
  green: {
    50: "text-green-50",
    100: "text-green-100",
    200: "text-green-200",
    300: "text-green-300",
    400: "text-green-400",
    500: "text-green-500",
    600: "text-green-600",
    700: "text-green-700",
    800: "text-green-800",
    900: "text-green-900",
    950: "text-green-950",
  },
  
  yellow: {
    50: "text-yellow-50",
    100: "text-yellow-100",
    200: "text-yellow-200",
    300: "text-yellow-300",
    400: "text-yellow-400",
    500: "text-yellow-500",
    600: "text-yellow-600",
    700: "text-yellow-700",
    800: "text-yellow-800",
    900: "text-yellow-900",
    950: "text-yellow-950",
  },
  
  red: {
    50: "text-red-50",
    100: "text-red-100",
    200: "text-red-200",
    300: "text-red-300",
    400: "text-red-400",
    500: "text-red-500",
    600: "text-red-600",
    700: "text-red-700",
    800: "text-red-800",
    900: "text-red-900",
    950: "text-red-950",
  },
  
  grey: {
    50: "text-grey-50",
    100: "text-grey-100",
    200: "text-grey-200",
    300: "text-grey-300",
    400: "text-grey-400",
    500: "text-grey-500",
    600: "text-grey-600",
    700: "text-grey-700",
    800: "text-grey-800",
    900: "text-grey-900",
    950: "text-grey-950",
  },
  
  blueGrey: {
    50: "text-blue-grey-50",
    100: "text-blue-grey-100",
    200: "text-blue-grey-200",
    300: "text-blue-grey-300",
    400: "text-blue-grey-400",
    500: "text-blue-grey-500",
    600: "text-blue-grey-600",
    700: "text-blue-grey-700",
    800: "text-blue-grey-800",
    900: "text-blue-grey-900",
    950: "text-blue-grey-950",
  },
  
  electricBlue: {
    50: "text-electricblue-50",
    100: "text-electricblue-100",
    200: "text-electricblue-200",
    300: "text-electricblue-300",
    400: "text-electricblue-400",
    500: "text-electricblue-500",
    600: "text-electricblue-600",
    700: "text-electricblue-700",
    800: "text-electricblue-800",
    900: "text-electricblue-900",
    950: "text-electricblue-950",
  },
  
  // Data Visualization Colors
  qualitative: {
    qc1: "text-qc-1",
    qc2: "text-qc-2",
    qc3: "text-qc-3",
    qc4: "text-qc-4",
    qc5: "text-qc-5",
    qc6: "text-qc-6",
    qc7: "text-qc-7",
    qc8: "text-qc-8",
    qc9: "text-qc-9",
    qc10: "text-qc-10",
    qc11: "text-qc-11",
    qc12: "text-qc-12",
  },
  
  divergent: {
    r7: "text-dryb-r7",
    r6: "text-dryb-r6",
    r5: "text-dryb-r5",
    r4: "text-dryb-r4",
    r3: "text-dryb-r3",
    r2: "text-dryb-r2",
    r1: "text-dryb-r1",
    y0: "text-dryb-y0",
    b1: "text-dryb-b1",
    b2: "text-dryb-b2",
    b3: "text-dryb-b3",
    b4: "text-dryb-b4",
    b5: "text-dryb-b5",
    b6: "text-dryb-b6",
    b7: "text-dryb-b7",
  },
} as const;

/**
 * Background Color Utilities
 * Complete set of background colors for all palettes
 */
export const backgrounds = {
  // Core Brand Backgrounds
  brand: {
    primaryBrand: "bg-primary-brand",
    primaryCtas: "bg-primary-ctas",
    warning: "bg-warning",
    error: "bg-error",
    success: "bg-success",
    information: "bg-information",
  },
  
  // Surface Backgrounds
  surface: {
    sectionBackground: "bg-section-background",
    inputBackground: "bg-input-background",
    pageNeutral: "bg-page-neutral",
  },
  
  // Fedgroup Brand Backgrounds
  fedBlue: {
    50: "bg-fedblue-50",
    100: "bg-fedblue-100",
    200: "bg-fedblue-200",
    300: "bg-fedblue-300",
    400: "bg-fedblue-400",
    500: "bg-fedblue-500",
    600: "bg-fedblue-600",
    700: "bg-fedblue-700",
    800: "bg-fedblue-800",
    900: "bg-fedblue-900",
    950: "bg-fedblue-950",
    default: "bg-fedblue-default",
  },
  
  fedPink: {
    50: "bg-fedpink-50",
    100: "bg-fedpink-100",
    200: "bg-fedpink-200",
    300: "bg-fedpink-300",
    400: "bg-fedpink-400",
    500: "bg-fedpink-500",
    525: "bg-fedpink-525",
    550: "bg-fedpink-550",
    600: "bg-fedpink-600",
    650: "bg-fedpink-650",
    700: "bg-fedpink-700",
    800: "bg-fedpink-800",
    900: "bg-fedpink-900",
    950: "bg-fedpink-950",
    default: "bg-fedpink-default",
  },
  
  fedGrey: {
    50: "bg-fedgrey-50",
    100: "bg-fedgrey-100",
    200: "bg-fedgrey-200",
    300: "bg-fedgrey-300",
    400: "bg-fedgrey-400",
    500: "bg-fedgrey-500",
    600: "bg-fedgrey-600",
    700: "bg-fedgrey-700",
    800: "bg-fedgrey-800",
    900: "bg-fedgrey-900",
    950: "bg-fedgrey-950",
    default: "bg-fedgrey-default",
  },
  
  fedOrange: {
    50: "bg-fedorange-50",
    100: "bg-fedorange-100",
    200: "bg-fedorange-200",
    300: "bg-fedorange-300",
    400: "bg-fedorange-400",
    500: "bg-fedorange-500",
    600: "bg-fedorange-600",
    700: "bg-fedorange-700",
    800: "bg-fedorange-800",
    900: "bg-fedorange-900",
    950: "bg-fedorange-950",
    default: "bg-fedorange-default",
  },
  
  // Standard Colors - Blue
  blue: {
    50: "bg-blue-50",
    100: "bg-blue-100",
    200: "bg-blue-200",
    300: "bg-blue-300",
    400: "bg-blue-400",
    500: "bg-blue-500",
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
    900: "bg-blue-900",
    950: "bg-blue-950",
  },
  
  green: {
    50: "bg-green-50",
    100: "bg-green-100",
    200: "bg-green-200",
    300: "bg-green-300",
    400: "bg-green-400",
    500: "bg-green-500",
    600: "bg-green-600",
    700: "bg-green-700",
    800: "bg-green-800",
    900: "bg-green-900",
    950: "bg-green-950",
  },
  
  yellow: {
    50: "bg-yellow-50",
    100: "bg-yellow-100",
    200: "bg-yellow-200",
    300: "bg-yellow-300",
    400: "bg-yellow-400",
    500: "bg-yellow-500",
    600: "bg-yellow-600",
    700: "bg-yellow-700",
    800: "bg-yellow-800",
    900: "bg-yellow-900",
    950: "bg-yellow-950",
  },
  
  red: {
    50: "bg-red-50",
    100: "bg-red-100",
    200: "bg-red-200",
    300: "bg-red-300",
    400: "bg-red-400",
    500: "bg-red-500",
    600: "bg-red-600",
    700: "bg-red-700",
    800: "bg-red-800",
    900: "bg-red-900",
    950: "bg-red-950",
  },
  
  grey: {
    50: "bg-grey-50",
    100: "bg-grey-100",
    200: "bg-grey-200",
    300: "bg-grey-300",
    400: "bg-grey-400",
    500: "bg-grey-500",
    600: "bg-grey-600",
    700: "bg-grey-700",
    800: "bg-grey-800",
    900: "bg-grey-900",
    950: "bg-grey-950",
  },
  
  blueGrey: {
    50: "bg-blue-grey-50",
    100: "bg-blue-grey-100",
    200: "bg-blue-grey-200",
    300: "bg-blue-grey-300",
    400: "bg-blue-grey-400",
    500: "bg-blue-grey-500",
    600: "bg-blue-grey-600",
    700: "bg-blue-grey-700",
    800: "bg-blue-grey-800",
    900: "bg-blue-grey-900",
    950: "bg-blue-grey-950",
  },
  
  electricBlue: {
    50: "bg-electricblue-50",
    100: "bg-electricblue-100",
    200: "bg-electricblue-200",
    300: "bg-electricblue-300",
    400: "bg-electricblue-400",
    500: "bg-electricblue-500",
    600: "bg-electricblue-600",
    700: "bg-electricblue-700",
    800: "bg-electricblue-800",
    900: "bg-electricblue-900",
    950: "bg-electricblue-950",
  },
  
  // Data Visualization Backgrounds
  qualitative: {
    qc1: "bg-qc-1",
    qc2: "bg-qc-2",
    qc3: "bg-qc-3",
    qc4: "bg-qc-4",
    qc5: "bg-qc-5",
    qc6: "bg-qc-6",
    qc7: "bg-qc-7",
    qc8: "bg-qc-8",
    qc9: "bg-qc-9",
    qc10: "bg-qc-10",
    qc11: "bg-qc-11",
    qc12: "bg-qc-12",
  },
  
  divergent: {
    r7: "bg-dryb-r7",
    r6: "bg-dryb-r6",
    r5: "bg-dryb-r5",
    r4: "bg-dryb-r4",
    r3: "bg-dryb-r3",
    r2: "bg-dryb-r2",
    r1: "bg-dryb-r1",
    y0: "bg-dryb-y0",
    b1: "bg-dryb-b1",
    b2: "bg-dryb-b2",
    b3: "bg-dryb-b3",
    b4: "bg-dryb-b4",
    b5: "bg-dryb-b5",
    b6: "bg-dryb-b6",
    b7: "bg-dryb-b7",
  },
} as const;

/**
 * Border Color Utilities
 * Complete set of border colors for all palettes
 */
export const borders = {
  // Core Brand Borders
  brand: {
    primaryBrand: "border-primary-brand",
    primaryCtas: "border-primary-ctas",
    warning: "border-warning",
    error: "border-error",
    success: "border-success",
    information: "border-information",
  },
  
  // Fedgroup Brand Borders
  fedBlue: {
    50: "border-fedblue-50",
    100: "border-fedblue-100",
    200: "border-fedblue-200",
    300: "border-fedblue-300",
    400: "border-fedblue-400",
    500: "border-fedblue-500",
    600: "border-fedblue-600",
    700: "border-fedblue-700",
    800: "border-fedblue-800",
    900: "border-fedblue-900",
    950: "border-fedblue-950",
    default: "border-fedblue-default",
  },
  
  fedPink: {
    50: "border-fedpink-50",
    100: "border-fedpink-100",
    200: "border-fedpink-200",
    300: "border-fedpink-300",
    400: "border-fedpink-400",
    500: "border-fedpink-500",
    525: "border-fedpink-525",
    550: "border-fedpink-550",
    600: "border-fedpink-600",
    650: "border-fedpink-650",
    700: "border-fedpink-700",
    800: "border-fedpink-800",
    900: "border-fedpink-900",
    950: "border-fedpink-950",
    default: "border-fedpink-default",
  },
  
  fedGrey: {
    50: "border-fedgrey-50",
    100: "border-fedgrey-100",
    200: "border-fedgrey-200",
    300: "border-fedgrey-300",
    400: "border-fedgrey-400",
    500: "border-fedgrey-500",
    600: "border-fedgrey-600",
    700: "border-fedgrey-700",
    800: "border-fedgrey-800",
    900: "border-fedgrey-900",
    950: "border-fedgrey-950",
    default: "border-fedgrey-default",
  },
  
  fedOrange: {
    50: "border-fedorange-50",
    100: "border-fedorange-100",
    200: "border-fedorange-200",
    300: "border-fedorange-300",
    400: "border-fedorange-400",
    500: "border-fedorange-500",
    600: "border-fedorange-600",
    700: "border-fedorange-700",
    800: "border-fedorange-800",
    900: "border-fedorange-900",
    950: "border-fedorange-950",
    default: "border-fedorange-default",
  },
} as const;

/**
 * Semantic Color Utilities
 * Pre-configured color combinations for common use cases
 */
export const semantic = {
  // Button variants
  button: {
    primary: "bg-primary-ctas text-white hover:bg-fedpink-600 focus:ring-2 focus:ring-fedpink-300",
    secondary: "bg-primary-brand text-white hover:bg-fedblue-600 focus:ring-2 focus:ring-fedblue-300",
    warning: "bg-warning text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300",
    error: "bg-error text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300",
    success: "bg-success text-white hover:bg-green-600 focus:ring-2 focus:ring-green-300",
    info: "bg-information text-white hover:bg-fedgrey-600 focus:ring-2 focus:ring-fedgrey-300",
  },
  
  // Status indicators
  status: {
    success: "bg-green-50 text-green-700 border-green-200",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
    error: "bg-red-50 text-red-700 border-red-200",
    info: "bg-blue-50 text-blue-700 border-blue-200",
  },
  
  // Input states
  input: {
    default: "bg-input-background border-fedgrey-300 text-fedgrey-900 placeholder:text-fedgrey-500",
    focus: "bg-input-background border-primary-ctas text-fedgrey-900 placeholder:text-fedgrey-500",
    error: "bg-input-background border-error text-fedgrey-900 placeholder:text-fedgrey-500",
    success: "bg-input-background border-success text-fedgrey-900 placeholder:text-fedgrey-500",
  },
  
  // Card variants
  card: {
    default: "bg-white border-fedgrey-200 shadow-sm",
    elevated: "bg-white border-fedgrey-200 shadow-lg",
    section: "bg-section-background border-fedgrey-100",
  },
  
  // Text variants
  text: {
    primary: "text-primary-brand",
    secondary: "text-fedgrey-700",
    tertiary: "text-fedgrey-500",
    inverse: "text-white",
    link: "text-primary-ctas hover:text-fedpink-600",
  },
} as const;


/**
 * Quick Access Utilities
 * Commonly used color combinations
 */
export const fedColors = {
  // Primary brand colors
  primary: colors.brand.primaryBrand,
  accent: colors.brand.primaryCtas,
  
  // Surface colors
  background: backgrounds.surface.sectionBackground,
  surface: backgrounds.surface.pageNeutral,
  input: backgrounds.surface.inputBackground,
  
  // Text colors
  text: semantic.text.primary,
  textSecondary: semantic.text.secondary,
  textMuted: semantic.text.tertiary,
  
  // Semantic colors
  success: colors.brand.success,
  warning: colors.brand.warning,
  error: colors.brand.error,
  info: colors.brand.information,
} as const;
