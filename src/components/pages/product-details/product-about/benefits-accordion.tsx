import Text from "@/components/design-system/typography/body-text/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const benefitsData = [
  {
    id: "item-1",
    title:
      "Invest up to R36 000 per year, towards a lifetime total of R500 000",
    content:
      "You can invest up to R36,000 per tax year in your Tax-Free Savings Account, with a lifetime limit of R500,000. This gives you flexibility to save at your own pace while enjoying tax-free growth on your investment.",
    className: "bg-gray-50 rounded-t-lg px-6 py-2",
  },
  {
    id: "item-2",
    title: "All the returns you earn are free of tax",
    content:
      "One of the biggest benefits of a TFSA is that all returns - including interest, capital gains, and dividends - are completely tax-free. This means your investment grows faster compared to taxable accounts.",
    className: "bg-gray-50 px-6 py-2",
  },
  {
    id: "item-3",
    title: "Your money grows faster with compounded returns",
    content:
      "Thanks to the power of compound interest and tax-free growth, your investment can grow significantly over time. The earlier you start investing, the more time your money has to compound and grow.",
    className: "bg-gray-50 px-6 py-2",
  },
  {
    id: "item-4",
    title: "Access to funds when you need it",
    content:
      "Thanks to the power of compound interest and tax-free growth, your investment can grow significantly over time. The earlier you start investing, the more time your money has to compound and grow.",
    className: "bg-gray-50 px-6 py-2",
  },
  {
    id: "item-5",
    title: "ZERO fees on our TFSA",
    content:
      "Thanks to the power of compound interest and tax-free growth, your investment can grow significantly over time. The earlier you start investing, the more time your money has to compound and grow.",
    className: "bg-gray-50 px-6 py-2 rounded-b-lg",
  },
];

const BenefitsAccordion = () => {
  return (
    <div className="mt-5">
      <Accordion type="single" collapsible>
        {benefitsData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={item.className}
          >
            <AccordionTrigger className="text-left sm:text-lg hover:no-underline py-4">
              <div className="flex items-center">
                <Image
                  src="/assets/common/icons/check-circle.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <Text variant="body-bold" className="text-secondary">
                  {item.title}
                </Text>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <Text variant="body-base" className="text-secondary">
                {item.content}
              </Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BenefitsAccordion;
