import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import ContactInfoComponent from "./contact-info";
import { GetStartedCard } from "@/interfaces/contact.interface";
import ArrowIcon from "@/components/icons/arrow-icon";
import Text from "@/components/design-system/typography/body-text/Text";

const contactInfo = {
  phone: "(011) 305 2440",
  email: "investments@fedgroup.co.za",
  workingDays: "Monday to Friday",
  workingHours: "08:00 - 17:00",
};

export const getStartedCards: GetStartedCard[] = [
  {
    icon: "/assets/common/icons/phone-advising.svg",
    iconAlt: "phone-advising",
    title: "Speak to your advisor",
    description: (
      <>
        <Text
          variant="body-base"
          className="text-default mb-2 w-full text-center md:text-left"
        >
          Good financial advice is priceless. Speak to your financial advisor to
          find the best product to suit your needs.
        </Text>
        <Text
          variant="body-base"
          className="text-default mt-5 w-full text-center md:text-left"
        >
          Don&apos;t have an advisor? Reach out to our team and we&apos;ll
          connect you with someone!
        </Text>
      </>
    ),
    button: null,
  },
  {
    icon: "/assets/common/icons/document-info.svg",
    iconAlt: "document-info",
    title: "Invest online now",
    description: (
      <>
        <Text
          variant="body-base"
          className="text-default mb-2 w-full text-center md:text-left"
        >
          Ready to take the next step? Our secure online platform makes it easy
          to start your investment journey at your convenience.
        </Text>
        <Text
          variant="body-base"
          className="text-default mt-5 w-full text-center md:text-left"
        >
          Follow our step-by-step process to begin investing in just a few
          minutes.
        </Text>
      </>
    ),
    button: (
      <Button
        size="lg"
        variant="default"
        icon={<ArrowIcon direction="right" className="w-4 h-4" />}
        iconPosition="right"
        className="w-full"
      >
        Invest online now
      </Button>
    ),
    height: "h-[610px]",
    iconWidth: 85.14,
    iconHeight: 96.75,
    useJustifyBetween: true,
  },
  {
    icon: "/assets/common/icons/mail-document.svg",
    iconAlt: "mail-advising",
    title: "Speak to us",
    description: (
      <>
        <Text
          variant="body-base"
          className="text-default mb-2 w-full text-center md:text-left"
        >
          Do you need help or have some questions? No problem. Our friendly team
          is here to help!
        </Text>
        <ContactInfoComponent contactInfo={contactInfo} />
      </>
    ),
    button: (
      <Button
        size="lg"
        variant="outline"
        icon={<ExternalLink className="w-4 h-4" />}
        iconPosition="right"
        className="w-full mt-6"
      >
        Contact form
      </Button>
    ),
  },
];
