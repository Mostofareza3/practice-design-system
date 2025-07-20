"use client";

import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileSpreadsheet } from "lucide-react";
import InvestmentDetailItem from "./investment-detailItem";

const investmentDetails = [
  {
    icon: "/assets/common/icons/cash.svg",
    label: "Starting amount",
    value: "R5 000 once-off or R500 monthly",
  },
  {
    icon: "/assets/common/icons/contract.svg",
    label: "Fees",
    value: "0%",
  },
  {
    icon: "/assets/common/icons/trade.svg",
    label: "Return",
    value: "Variable",
  },
  {
    icon: "/assets/common/icons/cash.svg",
    label: "Investment term",
    value: "No fixed term",
  },
  {
    icon: "/assets/common/icons/cash-out.svg",
    label: "Withdrawal",
    value: "Any time",
  },
];

const InvestmentDetailsCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: 0.6,
      },
    },
  };

  return (
    <>
      <motion.article
        className="bg-white shadow-lg border-0 rounded-t-lg rounded-bl-lg rounded-br-3xl overflow-hidden mt-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
      >
        <motion.div className="p-6 space-y-6" variants={containerVariants}>
          {/* Investment Details */}
          <motion.div className="space-y-4" variants={containerVariants}>
            {investmentDetails.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <InvestmentDetailItem
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Fund Fact Sheet Button */}
          <motion.div variants={buttonVariants}>
            <Button
              size="lg"
              variant="outline"
              icon={<FileSpreadsheet className="w-4 h-4" />}
              iconPosition="left"
              className="w-full"
            >
              Fun Fact Sheet
            </Button>
          </motion.div>
        </motion.div>
      </motion.article>
      <motion.div
        className="mt-10"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
      >
        <Button
          size="lg"
          icon={<ArrowIcon direction="right" className="w-4 h-4" />}
          iconPosition="right"
          className="w-full"
        >
          Invest online now
        </Button>
      </motion.div>
    </>
  );
};

export default InvestmentDetailsCard;
