"use client";
import Heading from "@/components/design-system/typography/heading/Heading";
import Text from "@/components/design-system/typography/body-text/Text";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BannerCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative w-full lg:w-[640px] bg-black/70 text-white md:p-10 p-5 rounded-tr-4xl rounded-bl-4xl overflow-hidden"
    >
      {/* Subtle light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
        }}
      />

      <header className="relative z-10 flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Heading variant="heading-1-page-title" as="h1">
            <span className="text-fedpink h1-page-title-accent">Tax-Free </span>
            <span className="text-white">Savings Account</span>
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Heading variant="heading-2-page-subtitle" className="text-white">
            With high returns and low volatility, no fees and no tax, it&lsquo;s
            the best of both worlds!
          </Heading>
        </motion.div>

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
            Invest online now
          </Button>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="py-6"
        >
          <Text variant="body-base" className="text-white">Reach out to your Financial Advisor</Text>
        </motion.div>
      </header>
    </motion.article>
  );
}
