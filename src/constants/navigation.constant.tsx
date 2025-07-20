import CommerceMegaMenu from "@/components/layouts/main/header/commerce-mega-menu";
import EmployeeBenifits from "@/components/layouts/main/header/employee-benifits";
import InvestmentMegaMenu from "@/components/layouts/main/header/investment-mega-menu";
import ResourcesMegaMenu from "@/components/layouts/main/header/resources-mega-menu";
import { NavigationData } from "@/interfaces/common.interface";

export enum InvestmentRoutes {
  SecureInvestment = "/product/secure-investment",
  TaxFreeSavings = "/product/tax-free-savings",
  Endowments = "/product/endowments",
  UnitTrusts = "/product/unit-trusts",
  LivingAnnuity = "/product/living-annuity",
  MoneyMarketFund = "/product/money-market-fund",
  ImpactFarming = "/product/impact-farming",
  FlexIncomePlan = "/product/flex-income-plan",
  StartInvesting = "/product/start-investing",
  SavingForRetirement = "/product/saving-for-retirement",
  SavingForEducation = "/product/saving-for-education",
  SavingForSomething = "/product/saving-for-something",
  BuildingWealth = "/product/building-wealth",
}

export enum CommerceRoutes {
  RealEstateFinance = "/product/commercial-finance",
  AgriBusiness = "/product/agri-business",
  PrivateCapital = "/product/private-capital",
  CommercialEnergy = "/product/commercial-energy",
}

export enum EmployeeBenefitsRoutes {
  GroupRetirementSavings = "/product/group-retirement-savings",
  GroupRiskCover = "/product/group-risk-cover",
  BeneficiaryFund = "/product/beneficiary-fund",
  UnclaimedBenefits = "/product/unclaimed-benefits",
}

export enum ResourcesRoutes {
  FAQs = "/product/faqs",
  HowToClaim = "/product/how-to-claim",
  FundFactSheets = "/product/fund-fact-sheets",
  FindFormOrDocument = "/product/forms-and-documents",
  ToolsAndCalculators = "/product/tools-and-calculators",
  UnderstandTwoPotRetirement = "/product/understand-two-pot-retirement",
  InvestmentGuides = "/product/investment-guides",
  MarketInsights = "/product/market-insights",
}

export const NAV_ITEMS: NavigationData = {
  main: [
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "News and insights", href: "/news" },
    { label: "For Advisors", href: "/advisors" },
    { label: "Careers", href: "/careers" },
  ],
  secondary: [
    {
      label: "Investments",
      href: "/product/investments",
      megaMenu: <InvestmentMegaMenu />,
      includedRoutes: Object.values(InvestmentRoutes),
    },
    {
      label: "Commercial Finance",
      href: "/commercial-finance",
      megaMenu: <CommerceMegaMenu />,
      includedRoutes: Object.values(CommerceRoutes),
    },
    {
      label: "Employee Benefits",
      href: "/employee-benefits",
      megaMenu: <EmployeeBenifits />,
      includedRoutes: Object.values(EmployeeBenefitsRoutes),
    },
    {
      label: "Resources",
      href: "/resources",
      megaMenu: <ResourcesMegaMenu />,
      includedRoutes: Object.values(ResourcesRoutes),
    },
  ],
};
