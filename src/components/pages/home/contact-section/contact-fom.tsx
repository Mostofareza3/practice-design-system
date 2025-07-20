"use client";

import { motion } from "framer-motion";
import { SendHorizontal } from "lucide-react";
import React from "react";

import { FormButton } from "@/components/form/form-button";
import { FormField } from "@/components/form/form-field";
import { FormInput } from "@/components/form/form-input";
import { FormLabel } from "@/components/form/form-label";
import { FormPhoneInput } from "@/components/form/form-phone-input";
import { FormProvider } from "@/components/form/form-provider";
import { FormSelect } from "@/components/form/form-select";
import { FormTextarea } from "@/components/form/form-textarea";
import { useContactForm } from "@/components/form/hooks/use-contact-form";
import {
  ContactFormData,
  ContactFormProps,
} from "@/interfaces/contact.interface";

const enquiryTypeOptions = [
  { value: "general", label: "General" },
  { value: "support", label: "Support" },
  { value: "sales", label: "Sales" },
];

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  loading = false,
}) => {
  const form = useContactForm();

  const handleSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    onSubmit?.(data);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={formVariants}
    >
      <FormProvider form={form} onSubmit={handleSubmit}>
        <div className="w-full  bg-white rounded-t-lg rounded-br-4xl rounded-bl-lg shadow-lg md:p-8 p-4 flex flex-col gap-3">
          <div>
            <FormLabel htmlFor="firstName" required>
              First name
            </FormLabel>
            <FormField name="firstName">
              <FormInput id="firstName" placeholder="Enter your first name" />
            </FormField>
          </div>

          <div>
            <FormLabel htmlFor="surname" required>
              Surname
            </FormLabel>
            <FormField name="surname">
              <FormInput id="surname" placeholder="Enter your last name" />
            </FormField>
          </div>

          <div>
            <FormLabel htmlFor="email" required>
              Email
            </FormLabel>
            <FormField name="email">
              <FormInput
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </FormField>
          </div>

          <div>
            <FormLabel htmlFor="contactNumber" required>
              Contact number
            </FormLabel>
            <FormField name="contactNumber">
              <FormPhoneInput id="contactNumber" placeholder="eg. 0112345678" />
            </FormField>
          </div>

          <div>
            <FormLabel htmlFor="enquiryType" required>
              Enquiry type
            </FormLabel>
            <FormField name="enquiryType">
              <FormSelect
                id="enquiryType"
                placeholder="Select type"
                options={enquiryTypeOptions}
              />
            </FormField>
          </div>

          <div>
            <FormLabel htmlFor="message" required>
              Message
            </FormLabel>
            <FormField name="message">
              <FormTextarea id="message" placeholder="Enter your message" />
            </FormField>
          </div>

          <FormButton
            loading={loading}
            icon={<SendHorizontal className="size-6" />}
          >
            Send
          </FormButton>
        </div>
      </FormProvider>
    </motion.div>
  );
};

export default ContactForm;
