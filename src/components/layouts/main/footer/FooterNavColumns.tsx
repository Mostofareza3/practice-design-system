import FooterNavColumn from "./FooterNavColumn";

const navData = [
  {
    title: "Investments",
    links: [
      { label: "Secured Investment", href: "#" },
      { label: "Tax-Free Savings Account", href: "#" },
      { label: "Endowments", href: "#" },
      { label: "Unit Trusts", href: "#" },
      { label: "Living Annuity", href: "#" },
      { label: "Money Market Fund", href: "#" },
      { label: "Impact Farming", href: "#" },
      { label: "Flex Income Plan", href: "#" },
    ],
  },
  {
    title: "Commercial Finance",
    links: [
      { label: "Commercial Energy Finance", href: "#" },
      { label: "Real Estate Finance", href: "#" },
      { label: "Agri-Business Finance", href: "#" },
      { label: "Private Capital", href: "#" },
    ],
  },
  {
    title: "Employee Benefits",
    links: [
      { label: "Group Retirement Savings", href: "#" },
      { label: "Group Risk Cover", href: "#" },
      { label: "Beneficiary Fund", href: "#" },
      { label: "Unclaimed Benefits", href: "#" },
      { label: "Beneficiary and Trust Administration", href: "#" },
    ],
  },
  {
    title: "Financial and Estate Planning",
    links: [
      { label: "Wealth Advisory", href: "#" },
      { label: "Trusts", href: "#" },
      { label: "Estate Administration", href: "#" },
      { label: "Settlement Trust Administration", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Forms and documents", href: "#" },
      { label: "How to claim", href: "#" },
      { label: "FAQs (Frequently Asked Questions)", href: "#" },
      { label: "Tools and calculators", href: "#" },
      { label: "Understand Two-Pot Retirement", href: "#" },
      { label: "Fund fact sheets", href: "#" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Contact us", href: "#" },
      { label: "News and Insights", href: "#" },
      { label: "For Advisors", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const FooterNavColumns = () => (
  <nav
    aria-label="Footer Navigation"
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 col-span-9"
  >
    {navData.map((col) => (
      <FooterNavColumn key={col.title} title={col.title} links={col.links} />
    ))}
  </nav>
);

export default FooterNavColumns;
