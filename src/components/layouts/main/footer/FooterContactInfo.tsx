import Text from "@/components/design-system/typography/body-text/Text";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const FooterContactInfo = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col w-full">
      <Text variant="body-x-small" className="text-white">
        Phone
      </Text>
      <div className="text-lg flex items-center gap-2">
        <Phone className="size-4" />
        <Link
          className="body-link-underline !text-white"
          href={`tel:+27113052300`}
        >
          +27 (11) 305 2300
        </Link>
      </div>
    </div>

    <div className="flex flex-col w-full">
      <Text variant="body-x-small" className="text-white">
        Email
      </Text>
      <div className="text-lg flex items-center gap-2">
        <Mail className="size-4" />
        <Link
          className="body-link-underline !text-white"
          href={`mailto:info@fedgroup.co.za`}
        >
          info@fedgroup.co.za
        </Link>
      </div>
    </div>
    <div className="flex flex-col w-full">
      <Text variant="body-x-small-bold" className="text-white">
        Physical Address
      </Text>
      <div className="text-lg flex items-center gap-2">
        <MapPin className="size-4 mt-0.5 text-white" />
        <Text variant="body-base">
          89 Bute Lane, Sandown, Sandton
          <br />
          2196
        </Text>
      </div>
    </div>
    <div className="flex items-start gap-2"></div>
  </div>
);

export default FooterContactInfo;
