import { Button } from "@/components/ui/button";
import { EmployeeBenefitsRoutes } from "@/constants/navigation.constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MegaMenuLink } from "./mega-menu-link";

const EmployeeBenifits = () => {
  return (
    <div className="w-full grid lg:grid-cols-12 gap-8 max-lg:p-2 max-lg:pb-20">
      <div className="lg:col-span-6">
        <h3 className="text-lg lg:text-[22px] font-bold text-primary-brand mb-3 lg:ml-3 font-montserrat">
          Our Employee Benefits
        </h3>
        <div className="space-y-2">
          <MegaMenuLink
            href={EmployeeBenefitsRoutes.GroupRetirementSavings}
            title="Group Retirement Savings"
            description="Flexible retirement solutions that help businesses provide for their employees' futures"
          />
          <MegaMenuLink
            href={EmployeeBenefitsRoutes.GroupRiskCover}
            title="Group Risk Cover"
            description="Comprehensive employee protection, including life, disability and funeral cover"
          />
          <MegaMenuLink
            href={EmployeeBenefitsRoutes.BeneficiaryFund}
            title="Beneficiary Fund"
            description="Professional fund management for minor and vulnerable beneficiaries"
          />
          <MegaMenuLink
            href={EmployeeBenefitsRoutes.UnclaimedBenefits}
            title="Unclaimed Benefits"
            description="Helping beneficiaries access and recover unclaimed benefits"
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
              <span className="hidden sm:inline">Employee Benefits</span>{" "}
              solutions
            </span>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-6 lg:border-l border-gray-200 lg:pl-5 max-lg:hidden">
        <Image
          src="/assets/common/extra/mega-blank.png"
          alt="Employee Benefits"
          width={518}
          height={368}
        />
      </div>
    </div>
  );
};

export default EmployeeBenifits;
