import React from 'react';
import { twMerge } from 'tailwind-merge';

export type TextVariant =
  | 'body-base'
  | 'body-base-accent'
  | 'body-code'
  | 'body-emphasis'
  | 'body-link-underline'
  | 'body-large'
  | 'body-large-accent'
  | 'body-small'
  | 'body-small-accent'
  | 'body-small-strong'
  | 'body-strong'
  | 'body-x-small'
  | 'body-x-small-accent'
  | 'body-x-small-bold'
  | 'descriptor-accent'
  | 'descriptor-accent-small'
  | 'descriptor-accent-medium'
  | 'lead-paragraph'
  | 'lead-body-style'
  | 'body-bold'
  | 'body-link-underline'

// Use the class names defined in globals.css
const variantStyles: Record<TextVariant, string> = {
  'body-base': 'body-base',
  'body-base-accent': 'body-base-accent',
  'body-code': 'body-code',
  'body-emphasis': 'body-emphasis',
  'body-link-underline': 'body-link-underline',
  'body-large': 'body-large',
  'body-large-accent': 'body-large-accent',
  'body-small': 'body-small',
  'body-small-accent': 'body-small-accent',
  'body-small-strong': 'body-small-strong',
  'body-strong': 'body-strong',
  'body-x-small': 'body-x-small',
  'body-x-small-accent': 'body-x-small-accent',
  'body-x-small-bold': 'body-x-small-bold',
  'descriptor-accent': 'descriptor-accent',
  'descriptor-accent-small': 'descriptor-accent-small',
  'descriptor-accent-medium': 'descriptor-accent-medium',
  'lead-paragraph': 'lead-paragraph',
  'lead-body-style': 'lead-body-style',
  'body-bold': 'body-bold',
};

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant: TextVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, as, className = '', children, ...props }) => {
  const styles = variantStyles[variant];

  if (!styles) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Text component: Variant "${variant}" not found in design system. ` +
        `Available variants: ${Object.keys(variantStyles).join(', ')}`
      );
      return (
        <p className="text-destructive font-bold p-2 border border-destructive rounded-md">
          Error: Invalid Text variant {variant}
        </p>
      );
    }
    return null;
  }

  let Component = as;
  if (!Component) {
    // Choose semantic HTML elements based on variant
    if (variant === 'body-code') Component = 'code';
    else if (variant === 'body-emphasis') Component = 'em';
    else if (variant === 'body-link-underline') Component = 'a';
    else if (variant === 'body-strong' || variant === 'body-small-strong') Component = 'strong';
    else if (variant === 'lead-paragraph') Component = 'p';
    else if (variant.includes('descriptor')) Component = 'span';
    else Component = 'p'; // Default for body variants
  }

  const mergedClasses = twMerge(styles, className, 'text-primary-brand');

  return (
    <Component className={mergedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Text;