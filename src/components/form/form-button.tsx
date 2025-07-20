"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface FormButtonProps {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const FormButton: React.FC<FormButtonProps> = ({
  type = "submit",
  children,
  className = "mt-4",
  disabled = false,
  loading = false,
  icon,
}) => {
  return (
    <Button
      type={type}
      className={className}
      disabled={disabled || loading}
      icon={icon}
      iconPosition="right"
      size="lg"
      variant="default"
    >
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
