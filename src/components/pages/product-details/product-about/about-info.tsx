"use client";

import SectionHeader from "@/components/common/section-header";
import Text from "@/components/design-system/typography/body-text/Text";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileSpreadsheet } from "lucide-react";

const AboutInfo = () => {
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

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div>
      <div className="md:px-20 grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 py-10 lg:py-20 bg-gray-50 px-4">
        <div className="order-2 lg:order-1">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <SectionHeader
              title="What is a Tax-Free Savings Account?"
              subtitle="Maximise the tax break available to you"
            />
          </motion.div>

          <div className=" mt-6">
            <motion.article
              className="prose prose-lg"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <Text variant="body-large" className="text-default">
                A Tax-Free Savings Account (or TFSA) is a tax-free investment
                vehicle that was introduced to help South Africans save without
                worrying about being taxed on the growth of their investment.
              </Text>
            </motion.article>
            <motion.article
              className="prose prose-lg mt-5 "
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              <Text variant="body-base" className="text-default">
                There is a tax-free savings limit. Currently, according to
                government guidelines, you can only invest up to R36 000 per
                financial year towards a lifetime total of R500 000 in tax-free
                investments. You can also choose between investing a lump-sum
                amount or monthly contributions. At Fedgroup, we believe that
                TFSAs support long-term savings (it could even work well as part
                of your retirement plan!) thanks to the power of compounding
                interest.
              </Text>
            </motion.article>

            <motion.div
              className="mt-5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="outline"
                icon={<FileSpreadsheet className="w-4 h-4" />}
                iconPosition="left"
              >
                Tax-Free Savings Account brochure
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-center order-1 lg:order-2"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <iframe
            className="max-sm:w-full rounded-br-4xl rounded-tl-4xl rounded-bl-lg rounded-tr-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bXky8VpPqIo?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            frameBorder="0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutInfo;
