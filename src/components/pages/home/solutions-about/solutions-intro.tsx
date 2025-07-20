"use client";

import SectionHeader from "@/components/common/section-header";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SolutionsIntro() {
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
    <div className="md:px-20">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionHeader
          subtitle="Comprehensive solutions"
          title="A smarter way to invest and grow"
          titleClassName="text-primary-brand"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
        <motion.article
          className="prose prose-lg"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.05 }}
        >
          <p className="text-black">
            At Fedgroup, we provide comprehensive financial solutions tailored
            to help individuals, businesses, and institutions achieve
            sustainable wealth growth. Our expert-driven approach combines
            innovative investment strategies with proven financial principles,
            ensuring your capital works efficiently toward your long-term
            financial goals.
          </p>
        </motion.article>

        <motion.div
          className="flex justify-center md:justify-end items-center md:items-end"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Button
            variant="default"
            icon={<ArrowIcon direction="right" className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore our solutions
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
