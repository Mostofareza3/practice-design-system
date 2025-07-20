import React from 'react';
import { twMerge } from 'tailwind-merge';

export type TypographyVariant =
  | 'heading-1-page-title'
  | 'heading-1-page-title-accent'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'heading-4-accent'
  | 'lead-body'
  | 'heading-2-page-subtitle'
  | 'heading-2-small'

// Use class names defined in globals.css
const variantStyles: Record<TypographyVariant, string> = {
  'heading-1-page-title': 'h1-page-title',
  'heading-1-page-title-accent': 'h1-page-title-accent',
  'heading-2': 'h2-heading',
  'heading-3': 'h3-heading',
  'heading-4': 'h4-heading',
  'heading-5': 'h5-heading',
  'heading-6': 'h6-heading',
  'heading-4-accent': 'h4-accent-style',
  'lead-body': 'lead-body-style',
  'heading-2-page-subtitle': 'h2-page-subtitle',
  'heading-2-small': 'h2-heading-small',
};

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ variant, as, className = '', children, ...props }) => {
  const styles = variantStyles[variant];

  if (!styles) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Typography component: Variant "${variant}" not found in design system. ` +
        `Available variants: ${Object.keys(variantStyles).join(', ')}`
      );
      return (
        <p className="text-destructive font-bold p-2 border border-destructive rounded-md">
          Error: Invalid Typography variant {variant}
        </p>
      );
    }
    return null;
  }

  let Component = as;
  if (!Component) {
    if (variant.includes('heading-1')) Component = 'h1';
    else if (variant.includes('heading-2')) Component = 'h2';
    else if (variant.includes('heading-3')) Component = 'h3';
    else if (variant.includes('heading-4')) Component = 'h4';
    else if (variant.includes('heading-5')) Component = 'h5';
    else if (variant.includes('heading-6')) Component = 'h6';
    else if (variant === 'lead-body' || variant === 'heading-4-accent') Component = 'p';
    else Component = 'span';
  }

  const mergedClasses = twMerge(styles, className, 'text-primary-brand');

  return (
    <Component className={mergedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Heading;