import Text from "@/components/design-system/typography/body-text/Text";
import Link from "next/link";

const FooterBottomBar = () => (
  <div className="container px-4 mx-auto mt-12 pt-6 flex flex-col items-center gap-5 text-xs">
    <div className="flex flex-wrap gap-4 justify-center mb-1">
      <Link className="body-link !text-white" href="#">Legal</Link>
      <Link className="body-link !text-white" href="#">Disclaimer</Link>
      <Link className="body-link !text-white" href="#">Cookie Policy</Link>
      <Link className="body-link !text-white" href="#">Privacy Policy</Link>
      <Link className="body-link !text-white" href="#">Treating Customers Fairly</Link>
      <Link className="body-link !text-white" href="#">FAIS Information</Link>
      <Link className="body-link !text-white" href="#">Compliance and Procedures</Link>
      <Link className="body-link !text-white" href="#">Complaints</Link>
    </div>
    <div className="text-center">
      <Text variant="body-x-small">
        Copyright © Fedgroup 2025. All rights reserved.
      </Text>
    </div>
    <div className="text-center">
      <Text variant="body-x-small">
        Fedgroup is an authorised financial service provider
      </Text>
    </div>
  </div>
);

export default FooterBottomBar;
