"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import { getStartedCards } from "./card-data";
import CardsContainer from "./cards-container";
import Text from "@/components/design-system/typography/body-text/Text";

const GetStartedSection = () => {
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

  return (
    <section className="w-full py-16">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader
            subtitle="Start investing tax free"
            title="How to invest in a TFSA"
            titleClassName="text-center text-white"
            subtitleClassName="text-center"
            subtitleVariant="descriptor-accent-medium"
          />
        </motion.div>
        <motion.div
          className="text-center mt-5"
          variants={itemVariants}
          transition={{ delay: 0.1 }}
        >
          <Text variant="lead-paragraph" className="text-white">
            Investing in our TFSA is simple! Whether you want to invest online,
            speak to an advisor, or contact our team, we&lsquo;ve made it easier
            than ever to save, tax free.
          </Text>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
      >
        <CardsContainer cards={getStartedCards} />
      </motion.div>
    </section>
  );
};

export default GetStartedSection;
