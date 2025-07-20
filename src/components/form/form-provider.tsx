"use client";

import React from "react";
import {
  FieldValues,
  FormProvider as HookFormProvider,
  UseFormReturn,
} from "react-hook-form";

interface FormProviderProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  children: React.ReactNode;
  onSubmit?: (data: T) => void;
}

export const FormProvider = <T extends FieldValues>({
  form,
  children,
  onSubmit,
}: FormProviderProps<T>) => {
  return (
    <HookFormProvider {...form}>
      <form onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}>
        {children}
      </form>
    </HookFormProvider>
  );
};
