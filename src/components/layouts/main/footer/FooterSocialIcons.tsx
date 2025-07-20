import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const FooterSocialIcons = () => (
  <div className="flex items-center gap-4 text-white/80 text-lg mb-2">
    <a href="#" aria-label="Facebook">
      <Facebook className="size-5 hover:text-white" />
    </a>
    <a href="#" aria-label="X">
      <Twitter className="size-5 hover:text-white" />
    </a>
    <a href="#" aria-label="YouTube">
      <Youtube className="size-5 hover:text-white" />
    </a>
    <a href="#" aria-label="LinkedIn">
      <Linkedin className="size-5 hover:text-white" />
    </a>
    <a href="#" aria-label="Instagram">
      <Instagram className="size-5 hover:text-white" />
    </a>
  </div>
);

export default FooterSocialIcons;
