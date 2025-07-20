import { Button } from "@/components/ui/button";
import { ResourcesRoutes } from "@/constants/navigation.constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MegaMenuLink } from "./mega-menu-link";

const ResourcesMegaMenu = () => {
  return (
    <div className="w-full grid lg:grid-cols-10 gap-8 max-lg:p-2 max-lg:pb-20">
      <div className="lg:col-span-3">
        <h3 className="text-lg lg:text-[22px] font-bold text-primary-brand mb-3 lg:ml-3 font-montserrat">
          Our Useful Resources
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={ResourcesRoutes.FAQs}
            title="FAQs"
            description="Clear answers to common questions about our products and services"
          />
          <MegaMenuLink
            href={ResourcesRoutes.HowToClaim}
            title="How to claim"
            description="Step-by-step guidance to help you access your benefits"
          />
          <MegaMenuLink
            href={ResourcesRoutes.FundFactSheets}
            title="Fund fact sheets"
            description="Detailed insights into our investment funds and performance"
          />
          <MegaMenuLink
            href={ResourcesRoutes.FindFormOrDocument}
            title="Find a form or document"
            description="Quick access to important forms and documentation"
          />
        </div>
      </div>

      <div className="h-[1px] bg-gray-300 lg:hidden"></div>

      <div className="lg:col-span-3">
        <h3 className="text-lg lg:text-[22px] font-bold text-primary-brand mb-3 lg:ml-3 font-montserrat">
          Tools and Resources
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={ResourcesRoutes.ToolsAndCalculators}
            title="Tools and calculators"
            description="Useful financial tools to help you plan and make decisions"
          />
          <MegaMenuLink
            href={ResourcesRoutes.UnderstandTwoPotRetirement}
            title="Understand Two-Pot Retirement"
            description="A simple breakdown of how the new retirement system works"
          />
          <MegaMenuLink
            href={ResourcesRoutes.InvestmentGuides}
            title="Investment guides"
            description="Comprehensive guides to help you make informed investment decisions"
          />
          <MegaMenuLink
            href={ResourcesRoutes.MarketInsights}
            title="Market insights"
            description="Latest updates and analysis of market trends and performance"
          />
        </div>
        <div className="mt-5">
          <Button
            variant="ghost"
            icon={<ArrowRight />}
            iconPosition="right"
            className=" text-primary  flex items-center gap-2 bg-white max-sm:w-full justify-between"
          >
            <span>
              Explore our <span className="hidden sm:inline">resources</span>{" "}
              solutions
            </span>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-4 lg:border-l border-gray-200 lg:pl-5 max-lg:hidden">
        <Image
          src="/assets/common/extra/mega-blank.png"
          alt="Resources and Tools"
          width={518}
          height={368}
        />
      </div>
    </div>
  );
};

export default ResourcesMegaMenu;
