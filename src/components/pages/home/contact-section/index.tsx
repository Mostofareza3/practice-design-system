"use client";

import { motion } from "framer-motion";
import ContactContent from "./contact-content";
import ContactForm from "./contact-fom";

const ContactSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-20">
        <motion.main
          className="lg:col-span-7 flex justify-center items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactContent />
        </motion.main>
        <motion.aside
          className="lg:col-span-5"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
        >
          <ContactForm />
        </motion.aside>
      </div>
    </section>
  );
};

export default ContactSection;
