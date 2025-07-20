"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import BenefitsAccordion from "./benefits-accordion";
import BenefitsContent from "./benefits-content";
import InvestmentDetailsCard from "./investment-detailsCard";
import Text from "@/components/design-system/typography/body-text/Text";

const Benefits = () => {
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
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <main>
      <div className="md:px-20  lg:py-20 py-10 bg-white px-4">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <SectionHeader
            subtitle="Why choose Fedgroup's TFSA?"
            title="Benefits of a Tax-Free Savings Account"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-20 gap-10">
          <article className="xl:col-span-8 lg:col-span-6 order-2 lg:order-1 lg:mt-10">
            <motion.div
              className="sm:text-lg mt-5 lg:max-w-2xl"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <Text variant="body-large" className="text-secondary">
                Aside from the obvious benefit of paying no tax on your growth,
                there are many more reasons to consider investing in a Fedgroup
                TFSA.
              </Text>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              <BenefitsAccordion />
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
            >
              <BenefitsContent />
            </motion.div>
          </article>
          <motion.aside
            className="xl:col-span-4 lg:col-span-6 order-1 lg:order-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <InvestmentDetailsCard />
          </motion.aside>
        </div>
      </div>
    </main>
  );
};

export default Benefits;
