import { Button } from "@/components/ui/button";
import { CommerceRoutes } from "@/constants/navigation.constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MegaMenuLink } from "./mega-menu-link";

const CommerceMegaMenu = () => {
  return (
    <div className="w-full grid lg:grid-cols-12 gap-8 max-lg:p-2 max-lg:pb-20">
      <div className="lg:col-span-6">
        <h3 className="text-lg lg:text-[22px] font-bold text-primary-brand mb-3 lg:ml-3 font-montserrat">
          Our commercial finance solutions
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={CommerceRoutes.RealEstateFinance}
            title="Real Estate finance"
            description="Tailored financing solutions to acquire, develop or refinance commercial property"
          />
          <MegaMenuLink
            href={CommerceRoutes.AgriBusiness}
            title="Agri-business finance"
            description="Flexible financing designed to support agricultural businesses with their unique needs"
          />
          <MegaMenuLink
            href={CommerceRoutes.PrivateCapital}
            title="Private Capital"
            description="Unlock capital with funding secured against high-value assets"
          />
          <MegaMenuLink
            href={CommerceRoutes.CommercialEnergy}
            title="Commercial energy finance"
            description="Funding solutions for renewable and energy-efficient commercial projects"
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
              Explore our{" "}
              <span className="hidden sm:inline">commercial finance</span>{" "}
              solutions
            </span>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-6 lg:border-l border-gray-200 lg:pl-5 max-lg:hidden">
        <Image
          src="/assets/common/extra/mega-blank.png"
          alt="Commerce Mega Menu"
          width={518}
          height={368}
        />
      </div>
    </div>
  );
};

export default CommerceMegaMenu;
