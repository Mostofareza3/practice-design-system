"use client";

import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  children,
  className = "",
}) => {
  const { control } = useFormContext();

  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return React.cloneElement(children as React.ReactElement<{
            name: string;
            value: string;
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
            onBlur: () => void;
            error: FieldError | undefined;
          }>, {
            ...field,
            error: fieldState.error,
          });
        }}
      />
    </div>
  );
};
