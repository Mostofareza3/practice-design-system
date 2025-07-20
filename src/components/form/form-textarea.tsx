"use client";

import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FormError } from "./form-error";

interface FormTextareaProps {
  id?: string;
  placeholder?: string;
  className?: string;
  error?: { message?: string };
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  name?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  placeholder,
  className = "h-24 text-base",
  error,
  ...props
}) => {
  return (
    <div>
      <Textarea
        id={id}
        placeholder={placeholder}
        className={`text-black ${className} ${error ? "border-red-500" : ""}`}
        {...props}
      />
      <FormError error={error} />
    </div>
  );
};
