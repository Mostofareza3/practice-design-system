"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FormError } from "./form-error";

interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface FormSelectProps {
  id?: string;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  error?: { message?: string };
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  // id,
  placeholder,
  options,
  className = "h-10 w-full !rounded-t-sm !rounded-br-sm !rounded-bl-2xl shadow-sm",
  error,
  value,
  onChange,
  // onBlur,
  ...props
}) => {
  return (
    <div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={` text-black ${className} ${error ? "border-red-500" : ""}`}
          {...props}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.icon && <span className="mr-2">{option.icon}</span>}
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormError error={error} />
    </div>
  );
};
