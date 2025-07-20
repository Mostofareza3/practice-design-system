"use client";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BannerCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative w-full lg:w-[640px] bg-black/70 text-white md:p-10 p-5 rounded-tr-4xl rounded-bl-4xl overflow-hidden"
    >
      {/* Subtle light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
        }}
      />

      <header className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="md:text-5xl text-4xl font-bold mb-4 leading-tight font-bitter"
        >
          <span className="text-white">Financial solutions </span>
          <span className="text-primary">designed for you</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-gray-300 mb-8 leading-relaxed md:text-2xl text-xl font-montserrat"
        >
          Whether you&lsquo;re investing, building a business or guiding
          clients, we&lsquo;re here to help you succeed.
        </motion.p>

        <nav className="flex flex-col sm:flex-row gap-3 mt-10">
          <Button
            variant="ghost"
            icon={<ArrowIcon direction="right" className="w-4 h-4" />}
            iconPosition="right"
          >
            Speak to us
          </Button>
          <Button
            variant="outline"
            icon={<ArrowIcon direction="right" className="w-4 h-4" />}
            iconPosition="right"
          >
            Retirement calculator
          </Button>
        </nav>
      </header>
    </motion.div>
  );
}
