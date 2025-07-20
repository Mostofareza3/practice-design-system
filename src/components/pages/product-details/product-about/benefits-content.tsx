import Text from "@/components/design-system/typography/body-text/Text";
import Link from "next/link";

const BenefitsContent = () => {
  return (
    <article className="mt-5">
      <Text variant="body-base" className="text-default  mt-5 lg:max-w-2xl">
        There are many different types of tax-free investments available in the
        market, each catering to a unique type of investor. It&lsquo;s always a
        good idea to{" "}
        <span className="font-bold">compare tax-free savings accounts</span> or
        speak to your financial advisor to find one that is best suited to your
        needs.
      </Text>
      <Text variant="body-base" className="text-default  mt-5 lg:max-w-2xl">
        sets ours apart? This account is an endowment policy issued by Fedgroup
        Life Ltd., invested in underlying unit trust funds and a range of cash
        and debt instruments. This is how we deliver a
        <span className="font-bold">superior return</span> to fixed-rate TFSA
        products, <span className="font-bold">without the high volatility</span>{" "}
        of products linked to equity markets. With benefits like these,
        Fedgroup&lsquo;s innovative offering represents one of the best tax-free
        savings accounts in South Africa!
      </Text>
      <Text variant="body-base" className="text-default  mt-5 lg:max-w-2xl">
        Not exactly what you were looking for?{" "}
        <Link
          href="/investments"
          className="text-link font-bold underline ml-2"
        >
          Explore all our investments
        </Link>
      </Text>
    </article>
  );
};

export default BenefitsContent;
