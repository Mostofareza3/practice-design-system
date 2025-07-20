"use client";

import SectionHeader from "@/components/common/section-header";
import Text from "@/components/design-system/typography/body-text/Text";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SuggestedSolutionIntro() {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
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
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.div variants={textVariants}>
        <SectionHeader
          subtitle="Solutions designed for you"
          title="More investment options"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10"
        variants={textVariants}
        transition={{ delay: 0.05 }}
      >
        <motion.article className="prose prose-lg" variants={textVariants}>
          <Text variant="lead-paragraph" className="text-secondary">
            Enhance your investment portfolio with these innovative products
            designed to help you grow your wealth and invest in your future.
          </Text>
        </motion.article>

        <motion.div
          className="flex justify-center md:justify-end items-center md:items-end"
          variants={buttonVariants}
        >
          <Button
            variant="default"
            icon={<ArrowIcon direction="right" className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore all products
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
