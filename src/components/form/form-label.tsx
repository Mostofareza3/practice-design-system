"use client";

import React from "react";

interface FormLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  children,
  className = "block text-sm font-medium mb-2 text-black",
  required = false,
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
