import Text from "@/components/design-system/typography/body-text/Text";
import { ContactInfo } from "@/interfaces/contact.interface";
import { CalendarClockIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";

interface ContactInfoProps {
  contactInfo: ContactInfo;
  className?: string;
}

const ContactInfoComponent = ({
  contactInfo,
  className = "",
}: ContactInfoProps) => {
  return (
    <div className={`flex flex-col items-start gap-2 w-full ${className}`}>
      <div className="flex flex-col w-full">
        <Text variant="body-x-small" className="text-default">
          Phone
        </Text>
        <div className="text-lg flex items-center gap-2">
          <Phone className="size-4" />
          <Link className="body-link-underline" href={`tel:${contactInfo.phone}`}>
            {contactInfo.phone}
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <Text variant="body-x-small" className="">
          Email
        </Text>
        <div className="text-lg flex items-center gap-2">
          <Mail className="size-4" />
          <Link className="body-link-underline" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex gap-2">
          <CalendarClockIcon className="size-4 mt-2" />
          <div>
            <Text variant="body-base" className="ml-1">
              {contactInfo.workingDays}
            </Text>
            <Text variant="body-strong">{contactInfo.workingHours}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoComponent;
