"use client";

import { motion } from "framer-motion";
import News from "../../shared/news/news";
import FaqDownloadFees from "./faq-download-fees";
import SuggestedSolutions from "./suggested-solutions";

export default function FaqNewsSolutions() {
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
    <section
      aria-labelledby="solutions-heading"
      className="relative bg-[url('/assets/common/extra/bg-illustration-1.png')] bg-bottom-left bg-no-repeat"
    >
      <div className="container mx-auto max-md:px-4 w-full bg-gray-50 md:mt-20  lg:pt-14 pt-10 -mt-10 relative z-10 rounded-tl-4xl overflow-hidden">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FaqDownloadFees />
        </motion.div>
        <div>
          <News />
        </div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <SuggestedSolutions />
        </motion.div>
      </div>
    </section>
  );
}
