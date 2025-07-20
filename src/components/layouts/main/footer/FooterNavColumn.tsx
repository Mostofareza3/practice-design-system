import Link from "next/link";

interface FooterNavColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterNavColumn = ({ title, links }: FooterNavColumnProps) => (
  <section>
    <Link href="#" className="body-link-bold !text-white">{title}</Link>
    <ul className="space-y-2 mt-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="body-link !text-white">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FooterNavColumn;
