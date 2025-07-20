"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FaqAccordions from "./faq-accordions";
import ArrowIcon from "@/components/icons/arrow-icon";
import Text from "@/components/design-system/typography/body-text/Text";

const FaqTab = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="faq-tab"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="max-w-md"
          variants={containerVariants}
          transition={{ delay: 0.1 }}
        >
          <SectionHeader
            subtitle="Got questions? You've come to the right place!"
            subtitleVariant="descriptor-accent"
            title="FAQs – answered"
          />
          <motion.article
            className="prose prose-lg"
            variants={containerVariants}
            transition={{ delay: 0.2 }}
          >
            <Text variant="lead-paragraph" className="my-5">
              We&lsquo;ve answered some of the most frequently asked questions
              about tax-free savings accounts to help you invest with
              confidence!
            </Text>
          </motion.article>
          <motion.div variants={containerVariants} transition={{ delay: 0.3 }}>
            <Button
              size="lg"
              variant="outline"
              icon={<ArrowIcon direction="right" className="w-4 h-4" />}
              iconPosition="right"
              className="mt-6 rounded-2xl"
            >
              View all FAQs
            </Button>
          </motion.div>
        </motion.div>
        <motion.div variants={containerVariants} transition={{ delay: 0.15 }}>
          <FaqAccordions />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FaqTab;
