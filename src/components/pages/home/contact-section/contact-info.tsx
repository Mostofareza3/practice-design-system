"use client";

import { motion } from "framer-motion";
import { CalendarClockIcon, Headset, Mail } from "lucide-react";

const ContactInfo = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
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
    <motion.address
      className="space-y-4 mt-10 not-italic"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      <motion.div variants={itemVariants}>
        <h3 className="font-bold text-sm">Phone</h3>
        <div className="flex items-center gap-2 mt-1">
          <Headset className="w-6 h-6" />
          <a
            href="tel:+2348134567890"
            className="hover:text-blue-600 transition-colors"
          >
            +234 813 456 7890
          </a>
        </div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <h3 className="font-bold text-sm">Email</h3>
        <div className="flex items-center gap-2 mt-1">
          <Mail className="w-6 h-6" />
          <a
            href="mailto:info@fedgroup.com"
            className="hover:text-blue-600 transition-colors"
          >
            info@fedgroup.com
          </a>
        </div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <h3 className="font-bold text-sm">Business Hours</h3>
        <div className="flex items-center gap-2 mt-1">
          <CalendarClockIcon className="w-6 h-6" />
          <time>
            Mon - Fri <br /> 9:00 AM - 5:00 PM
          </time>
        </div>
      </motion.div>
    </motion.address>
  );
};

export default ContactInfo;
