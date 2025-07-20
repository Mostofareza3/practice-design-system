"use client";

import { ContactFormData } from "@/interfaces/contact.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "../schemas/contact-form.schema";

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      surname: "",
      email: "",
      contactNumber: "",
      countryCode: "🇿🇦",
      enquiryType: "",
      message: "",
    },
  });

  return form;
};
