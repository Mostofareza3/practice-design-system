"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { FormError } from "./form-error";

interface FormInputProps {
  id?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  error?: { message?: string };
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  name?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  placeholder,
  type = "text",
  className = "h-10",
  error,
  ...props
}) => {
  return (
    <div>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${className} ${error ? "border-red-500" : ""}`}
        {...props}
      />
      <FormError error={error} />
    </div>
  );
};
