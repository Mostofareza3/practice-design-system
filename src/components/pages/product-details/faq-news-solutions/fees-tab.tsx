"use client";

import SectionHeader from "@/components/common/section-header";
import Text from "@/components/design-system/typography/body-text/Text";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const FeesTab = () => {
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
        key="fees-tab"
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
            subtitle="Transparent fees mean no surprises"
            subtitleVariant="descriptor-accent"
            title="Fedgroup TFSA fees"
          />
          <motion.article
            className="prose prose-lg"
            variants={containerVariants}
            transition={{ delay: 0.2 }}
          >
            <Text variant="lead-paragraph" className="my-5">
              We charge fees only where necessary and believe in keeping them
              simple and clear, so you know exactly what you&lsquo;re paying.
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
              Invest online now
            </Button>
          </motion.div>
        </motion.div>
        <motion.div variants={containerVariants} transition={{ delay: 0.15 }}>
          <motion.dl className="space-y-6" variants={containerVariants}>
            <div className="flex justify-center items-center">
              <div className="relative">
                <span className="text-8xl md:text-[200px] font-bold text-gray-400">
                  0
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-pink-500 flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-gray-400">
                  %
                </span>
                <span className="font-bitter">zero!</span>
              </div>
            </div>
          </motion.dl>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeesTab;
