"use client";

import SectionHeader from "@/components/common/section-header";
import Text from "@/components/design-system/typography/body-text/Text";
import Heading from "@/components/design-system/typography/heading/Heading";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";

const DownloadsTab = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="downloads-tab"
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
            subtitle="Everything you need to get started"
            subtitleVariant="descriptor-accent"
            title="All the TFSA documents you need"
          />
          <motion.article
            className="prose prose-lg"
            variants={containerVariants}
            transition={{ delay: 0.2 }}
          >
            <Text variant="lead-paragraph" className="my-5">
              From product brochures and fact sheets to application and transfer
              forms, you&lsquo;ll find everything you need for your Tax-Free
              Savings Account here.
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
              View all Downloads
            </Button>
          </motion.div>
        </motion.div>
        <motion.div variants={containerVariants} transition={{ delay: 0.15 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              transition={{ delay: 0.2 }}
            >
              <Heading variant="heading-6" className="mb-4">
                Documents
              </Heading>
              <motion.div className="space-y-4" variants={containerVariants}>
                {[
                  "Fedgroup Client Application form",
                  "TFSA Application Form",
                  "Application for Investment (with beneficiary) Form",
                  "FICA Checklist",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Link
                      href="/"
                      className="body-link flex items-center justify-start"
                    >
                      <span>
                        <FileText className="w-4 h-4 text-link mr-2" />
                      </span>
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              transition={{ delay: 0.25 }}
            >
              <Heading variant="heading-6" className="mb-4">
                Brochures
              </Heading>
              <motion.div className="space-y-3" variants={containerVariants}>
                {[
                  "TFSA- Brochure",
                  "TFSA - Fund Fact Sheet",
                  "Dividends Tax Declaration",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Link
                      href="/"
                      className="body-link flex items-center justify-start"
                    >
                      <span>
                        <FileText className="w-4 h-4 text-link mr-2" />
                      </span>
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DownloadsTab;
