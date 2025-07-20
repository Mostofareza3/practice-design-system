"use client";

import React from "react";

interface FormErrorProps {
  error?: { message?: string };
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({
  error,
  className = "text-red-500 text-sm mt-1",
}) => {
  if (!error?.message) return null;

  return <p className={className}>{error.message}</p>;
};
