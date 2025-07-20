"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SolutionsBottom from "./solutions-bottom";
import SolutionsGrid from "./solutions-grid";
import SolutionsIntro from "./solutions-intro";

export default function SolutionsAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  return (
    <section
      ref={sectionRef}
      aria-labelledby="solutions-heading"
      className="container mx-auto max-md:px-4 w-full bg-gray-50 my-16 lg:pt-24 pt-10 -mt-10 relative z-10 rounded-4xl overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SolutionsIntro />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.15 }}
      >
        <SolutionsGrid />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
      >
        <SolutionsBottom />
      </motion.div>
    </section>
  );
}
