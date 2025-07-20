"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import ProductCard, { ProductCardProps } from "./product-cards";
import SuggestedSolutionIntro from "./suggested-solution-intro";

const data: ProductCardProps[] = [
  {
    subtitle: "Grow your savings",
    title: "Fedgroup Unit Trusts",
    description:
      "A range of Unit Trust Funds to suit your needs. Whether you're saving for something or want an emergency fund, there's an option for you!",
    image: "/assets/common/icons/invest-coin.svg",
  },
  {
    subtitle: "Invest for your future",
    title: "Secured Investment",
    description:
      "A fixed-rate investment with a fixed term for total peace of mind. Keep your capital secure and collect the interest or reinvest it for growth.",
    image: "/assets/common/icons/invest-coin.svg",
  },
  {
    subtitle: "Build your wealth",
    title: "Fedgroup Endowment",
    description:
      "For higher earners looking to capitalise on the tax benefits offered by endowments, with competitive returns!",
    image: "/assets/common/icons/invest-coin.svg",
  },
];

const SuggestedSolutions = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="md:px-20  bg-white lg:py-28 py-10 relative">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <SuggestedSolutionIntro />
      </motion.div>
      <motion.div
        className="hidden xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mt-20"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1 }}
      >
        {data.map((item, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <ProductCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="xl:hidden relative mt-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-80 snap-center flex-shrink-0"
              variants={cardVariants}
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mt-6"
          variants={buttonVariants}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="rounded-full bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      <div>
        <Image
          src="/assets/common/extra/divider-illustration.png"
          alt="Divider Illustration"
          width={1440}
          height={48}
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default SuggestedSolutions;
