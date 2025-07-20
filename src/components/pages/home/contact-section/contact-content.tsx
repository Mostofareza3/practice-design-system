"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import ContactInfo from "./contact-info";

const ContactContent = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: 0.15,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.header variants={textVariants}>
        <SectionHeader
          subtitle="Need assistance?"
          title="Let's talk about your financial goals"
        />
        <motion.article
          className="prose prose-lg mt-5"
          variants={textVariants}
          transition={{ delay: 0.05 }}
        >
          <p>
            Need help or have a question? Our friendly team is here to assist
            you with expert support.
          </p>
        </motion.article>
      </motion.header>
      <motion.div variants={infoVariants}>
        <ContactInfo />
      </motion.div>
    </motion.div>
  );
};

export default ContactContent;
