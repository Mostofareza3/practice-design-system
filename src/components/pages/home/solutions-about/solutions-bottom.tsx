"use client";

import SectionHeader from "@/components/common/section-header";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SolutionsBottom() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -15,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
    <motion.div
      className="md:px-20 mt-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-6 py-20 rounded-t-2xl rounded-bl-none rounded-br-[40px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.figure variants={imageVariants}>
        <Image
          src="/assets/home/solution/solution-bottom-bg.png"
          alt="Financial solutions illustration"
          width={556}
          height={200}
        />
      </motion.figure>

      <motion.div className="flex flex-col gap-5" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <SectionHeader
            subtitle="Why choose Fedgroup"
            title="Trusted by thousands of investors"
            titleClassName="text-primary-brand"
          />
          <motion.article
            className="prose prose-lg mt-5"
            variants={itemVariants}
          >
            <p className="text-black">
              With decades of experience in financial services, we&apos;ve built
              a reputation for delivering consistent returns and exceptional
              client service. Our commitment to transparency, innovation, and
              personalized solutions has made us a trusted partner for investors
              seeking reliable wealth growth.
            </p>
          </motion.article>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <Button
            variant="default"
            icon={<ArrowIcon direction="right" className="w-4 h-4" />}
            iconPosition="right"
          >
            Learn more about us
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
