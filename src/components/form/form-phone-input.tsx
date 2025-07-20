"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import { FormError } from "./form-error";

interface CountryCode {
  value: string;
  flag: string;
  code: string;
  label: string;
}

interface FormPhoneInputProps {
  id?: string;
  placeholder?: string;
  className?: string;
  error?: { message?: string };
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  name?: string;
  countryValue?: string;
  onCountryChange?: (value: string) => void;
  countries?: CountryCode[];
}

const defaultCountries: CountryCode[] = [
  {
    value: "🇿🇦",
    flag: "/assets/common/extra/example-flag.png",
    code: "+27",
    label: "South Africa",
  },
  {
    value: "🇳🇬",
    flag: "/assets/common/extra/example-flag.png",
    code: "+234",
    label: "Nigeria",
  },
  {
    value: "🇰🇪",
    flag: "/assets/common/extra/example-flag.png",
    code: "+254",
    label: "Kenya",
  },
  {
    value: "🇺🇬",
    flag: "/assets/common/extra/example-flag.png",
    code: "+256",
    label: "Uganda",
  },
  {
    value: "🇹🇿",
    flag: "/assets/common/extra/example-flag.png",
    code: "+255",
    label: "Tanzania",
  },
  {
    value: "🇿🇲",
    flag: "/assets/common/extra/example-flag.png",
    code: "+260",
    label: "Zambia",
  },
  {
    value: "🇿🇼",
    flag: "/assets/common/extra/example-flag.png",
    code: "+263",
    label: "Zimbabwe",
  },
];

export const FormPhoneInput: React.FC<FormPhoneInputProps> = ({
  id,
  placeholder = "eg. 0112345678",
  className = "h-10",
  error,
  value,
  onChange,
  onBlur,
  name,
  countryValue,
  onCountryChange,
  countries = defaultCountries,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return countries.find(country => country.value === countryValue) || countries[0];
  });

  const handleCountryChange = (value: string) => {
    const country = countries.find(c => c.value === value);
    if (country) {
      setSelectedCountry(country);
      onCountryChange?.(value);
    }
  };

  return (
    <div>
      <div className="shadow-sm flex items-center overflow-hidden rounded-t-sm rounded-br-sm rounded-bl-2xl">
        <Select value={selectedCountry.value} onValueChange={handleCountryChange}>
          <SelectTrigger className="flex items-center !h-10 px-4 py-2 bg-gray-50 rounded-l-lg rounded-r-none border border-r-0 border-gray-200">
            <Image
              src={selectedCountry.flag}
              alt={`${selectedCountry.label} Flag`}
              width={24}
              height={18}
            />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem
                key={country.value}
                value={country.value}
                className="flex items-center gap-2"
              >
                <span>{country.value}</span>
                <span>{country.code}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id={id}
          placeholder={placeholder}
          className={`${className} rounded-l-none text-base !shadow-none ${
            error ? "border-red-500" : ""
          }`}
          value={value}
          onChange={(e) => {
            const numbersOnly = e.target.value.replace(/[^0-9]/g, '');
            onChange?.({ ...e, target: { ...e.target, value: numbersOnly } });
          }}
          onBlur={onBlur}
          name={name}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>
      <FormError error={error} />
    </div>
  );
};
