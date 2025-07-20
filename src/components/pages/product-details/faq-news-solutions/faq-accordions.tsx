import Text from "@/components/design-system/typography/body-text/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const benefitsData = [
  {
    id: "item-1",
    title: "What is a Tax-Free Savings Account?",
    content:
      "A Tax-Free Savings Account (TFSA) is a registered account that allows Canadian residents to earn investment income tax-free. Any contributions, growth, and withdrawals from a TFSA are not subject to tax.",
    className: "rounded-t-xl ",
  },
  {
    id: "item-2",
    title: "How does a Tax-Free Savings Account work?",
    content:
      "Only service providers designated by the Minister in the Gazette are allowed to provide tax-free investments. You can view the list of designated providers on the SARS website. TFSAs are actually quite simple! You make either a lump-sum investment or contribute monthly, within the limits, of course, and then watch your money grow! Because you don't have to pay tax on any of your earnings, your money effectively grows faster and when you choose to withdraw, you still won't be taxed. So, as long as you choose the best TFSA for you, you can enjoy maximum savings without the tax headache!",
  },
  {
    id: "item-3",
    title: "What is the tax-free investment limit?",
    content:
      "Only service providers designated by the Minister in the Canada Revenue Agency are allowed to provide tax-free investments. You can view the list of designated providers on the SARS website. TFSAs are actually quite simple! You make either a lump-sum investment or contribute monthly, within the limits, of course, and then watch your money grow! Because you don't have to pay tax on any of your earnings, your money effectively grows faster and when you choose to withdraw, you still won't be taxed. So, as long as you choose the best TFSA for you, you can enjoy maximum savings without t",
  },
  {
    id: "item-4",
    title: "What are the benefits of a Tax-Free Savings Account?",
    content:
      "The annual TFSA contribution limit for 2024 is $7,000. If you haven't contributed to a TFSA before, you can contribute the cumulative amount from when you became eligible.",
  },
  {
    id: "item-5",
    title: "How do I invest in a Fedgroup Tax-Free Savings Account?",
    content:
      "You can open a Fedgroup TFSA by visiting our website, completing the application process, and making your initial contribution. Our team will guide you through the investment options available.",
    className: "rounded-b-xl",
  },
];

const FaqAccordions = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        {benefitsData.map((item, idx) => {
          return (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={cn(
                "bg-white px-6 py-2 border-b last:border-b-0 border-gray-100 transition-all duration-200",
                item.className,
                "[&[data-state=open]]:my-4 [&[data-state=open]]:border [&[data-state=open]]:border-gray-300 [&[data-state=open]]:shadow-md [&[data-state=open]]:z-10 [&[data-state=open]]:relative [&[data-state=open]]:rounded-tl-3xl [&[data-state=open]]:rounded-tr-lg [&[data-state=open]]:rounded-bl-lg [&[data-state=open]]:rounded-br-3xl"
              )}
            >
              <AccordionTrigger className="text-left sm:text-lg hover:no-underline py-4">
                <Text variant="body-strong">{item.title}</Text>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <Text variant="body-base">{item.content}</Text>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqAccordions;
