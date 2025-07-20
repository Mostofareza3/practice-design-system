import { Button } from "@/components/ui/button";
import { InvestmentRoutes } from "@/constants/navigation.constant";
import { ArrowRight } from "lucide-react";
import { MegaMenuLink } from "./mega-menu-link";

const InvestmentMegaMenu = () => {
  return (
    <div className="w-full grid lg:grid-cols-10 gap-8  max-lg:p-2 max-lg:pb-20 ">
      <div className="lg:col-span-3">
        <h3 className="text-lg lg:text-[22px] font-bold text-primary-brand mb-3 lg:ml-3 font-montserrat  ">
          Our Investment products
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={InvestmentRoutes.SecureInvestment}
            title="Secure Investment"
            description="A low-risk fixed-rate investment offering..."
          />
          <MegaMenuLink
            href={InvestmentRoutes.TaxFreeSavings}
            title="Tax-free Savings account"
            description="A tax-free investment with market-beating returns and zero fees, allowing up to R36,000 per year."
          />
          <MegaMenuLink
            href={InvestmentRoutes.Endowments}
            title="Endowments"
            description="Long-term, tax-efficient investments designed to preserve and grow wealth while providing estate-planning benefits"
          />
          <MegaMenuLink
            href={InvestmentRoutes.UnitTrusts}
            title="Unit Trusts"
            description="Diversified portfolios managed prudently to safeguard funds and outperform benchmarks"
          />
        </div>
      </div>
      <div className="lg:col-span-3">
        <h3 className="text-lg lg:text-[22px] font-bold text-black mb-3 lg:ml-3 opacity-0 max-lg:hidden">
          .
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={InvestmentRoutes.LivingAnnuity}
            title="Living Annuity"
            description="Download our free investment offering guide..."
          />
          <MegaMenuLink
            href={InvestmentRoutes.MoneyMarketFund}
            title="Money Market Fund"
            description="A low-risk investment offering capital preservation and consistent returns through short-term financial instruments"
          />
          <MegaMenuLink
            href={InvestmentRoutes.ImpactFarming}
            title="Impact Farming"
            description="Invest directly in sustainable assets like beehives, blueberry bushes, and solar panels to earn passive income while supporting environmental conservation"
          />
          <MegaMenuLink
            href={InvestmentRoutes.FlexIncomePlan}
            title="Flex Income plan"
            description="A flexible five-year investment offering various income strategies tailored to individual needs"
          />
        </div>
        <div className="mt-5">
          <Button
            variant="ghost"
            icon={<ArrowRight />}
            iconPosition="right"
            className=" text-fedpink  flex items-center gap-2 bg-white max-sm:w-full justify-between"
          >
            <span>
              Explore our <span className="hidden sm:inline">investment</span>{" "}
              solutions
            </span>
          </Button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 lg:hidden"></div>
      <div className="lg:col-span-4 lg:border-l border-gray-200 lg:pl-5">
        <h3 className="text-lg lg:text-[22px] font-bold text-black mb-3 lg:ml-3 font-montserrat">
          Our starter guides to
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={InvestmentRoutes.StartInvesting}
            title="Start investing"
            description="A five-year, fixed-rate investment offering consistent returns and capital security"
          />
          <MegaMenuLink
            href={InvestmentRoutes.SavingForRetirement}
            title="Saving for retirement"
            description="A tax-free investment with market-beating returns and zero fees, allowing up to R36,000 per year"
          />
          <MegaMenuLink
            href={InvestmentRoutes.SavingForEducation}
            title="Saving for education"
            description="Long-term, tax-efficient investments designed to preserve and grow wealth while providing estate-planning benefits"
          />

          <MegaMenuLink
            href={InvestmentRoutes.SavingForSomething}
            title="Saving for something"
            description="Diversified portfolios managed prudently to safeguard funds and outperform benchmarks"
          />
          <MegaMenuLink
            href={InvestmentRoutes.BuildingWealth}
            title="Building wealth"
            description="Diversified portfolios managed prudently to safeguard funds and outperform benchmarks"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentMegaMenu;
