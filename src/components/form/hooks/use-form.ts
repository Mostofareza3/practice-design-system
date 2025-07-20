"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormWithValidation = <T extends z.ZodType<any, any, any>>(
  schema: T,
  options?: Omit<UseFormProps<z.infer<T>>, "resolver">
) => {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    ...options,
  });
};
