import { Logo } from "@/components/common/logo";
import FooterAppBadges from "./FooterAppBadges";
import FooterContactInfo from "./FooterContactInfo";
import FooterSocialIcons from "./FooterSocialIcons";
import Link from "next/link";

const FooterLeftSection = () => (
  <section className="flex flex-col gap-6 col-span-3 mb-10">
    <Link href="/">
      <Logo />
    </Link>
    <FooterSocialIcons />
    <div>
      <FooterContactInfo />
    </div>
    <FooterAppBadges />
  </section>
);

export default FooterLeftSection;
