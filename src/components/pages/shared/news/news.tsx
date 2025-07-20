"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import NewsCard, { NewsCardProps } from "./news-card";
import NewsIntro from "./news-intro";

const newsData: NewsCardProps[] = [
  {
    category: "Financial education",
    title: `Investing 101: A beginner's guide`,
    description:
      "New to investing? We break down the basics, from investment types to risk levels, so you can start your journey with confidence.",
    date: "20 March 2025",
    image: "/assets/common/news/news-image-1.png",
  },
  {
    category: "Investment insight",
    title: "The rise of alternative investments",
    description:
      "More investors are diversifying beyond stocks and bonds. Here's why alternative assets are gaining traction.",
    date: "20 March 2025",
    image: "/assets/common/news/news-image-2.png",
  },
  {
    category: "In the news",
    title: "Fedgroup launches sustainable investing",
    description:
      "Our new investment product delivers strong returns while making a positive impact. Find out how you can get involved.",
    date: "20 March 2025",
    image: "/assets/common/news/news-image-3.png",
  },
  {
    category: "Business finance",
    title: "Funding growth, the smart way",
    description:
      "Discover how Fedgroup's tailored lending solutions are helping businesses unlock new opportunities.",
    date: "20 March 2025",
    image: "/assets/common/news/news-image-4.png",
  },
];

const News = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const cardVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="md:px-20 bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.div variants={cardVariants}>
        <NewsIntro />
      </motion.div>
      <motion.div
        className="hidden xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        variants={cardVariants}
        transition={{ delay: 0.05 }}
      >
        {newsData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            transition={{ delay: idx * 0.08 }}
          >
            <NewsCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="xl:hidden relative mt-10"
        variants={cardVariants}
        transition={{ delay: 0.05 }}
      >
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              className="w-80 snap-center flex-shrink-0"
              variants={cardVariants}
              transition={{ delay: index * 0.08 }}
            >
              <NewsCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mt-6"
          variants={buttonVariants}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="rounded-full bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default News;
