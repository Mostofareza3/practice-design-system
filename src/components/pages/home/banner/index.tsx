"use client";
import { motion } from "framer-motion";
import BannerCard from "./banner-card";
import BannerStatistics from "./banner-statistics";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[url('/assets/home/banner/banner-bg.png')] bg-cover bg-center bg-no-repeat h-[760px] "
    >
      <div className="py-20">
        <div className="container mx-auto  px-4 ">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-5 border-8 rounded-t-4xl rounded-bl-4xl h-[560px] sm:bg-[url('/banner/banner-illustration.png')] sm:bg-right-bottom sm:bg-no-repeat p-5 flex items-end justify-between"
          >
            <div>
              <BannerCard />
            </div>
            <div className="max-lg:hidden">
              <BannerStatistics />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="border-b-8 border-primary origin-left"
      />
    </motion.section>
  );
};

export default Banner;
