"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import SolutionCard from "./solution-card";

interface SolutionCardData {
  title: string;
  description: string;
  backgroundImage: string;
}

const solutionsData: SolutionCardData[] = [
  {
    title: "Investments",
    description:
      "Secure, high-yield investment opportunities designed to maximize returns while protecting your capital through diversified portfolios and expert risk management.",
    backgroundImage: "/assets/home/solution/solution-card-bg-1.png",
  },
  {
    title: "Commercial Finance",
    description:
      "Flexible funding solutions that empower businesses to expand operations, acquire assets, and seize growth opportunities with tailored financial structures.",
    backgroundImage: "/assets/home/solution/solution-card-bg-2.png",
  },
  {
    title: "Asset Management",
    description:
      "Professional investment strategies that optimize institutional and corporate portfolios through data-driven analysis and strategic asset allocation.",
    backgroundImage: "/assets/home/solution/solution-card-bg-3.png",
  },
  {
    title: "Group Solutions",
    description:
      "Comprehensive employee benefit programs including retirement planning and risk protection, designed to attract and retain top talent while securing your workforce's financial future.",
    backgroundImage: "/assets/home/solution/solution-card-bg-4.png",
  },
];

export default function SolutionsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Card width + gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Card width + gap
        behavior: "smooth",
      });
    }
  };

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="hidden xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:px-20"
        variants={containerVariants}
      >
        {solutionsData.map((card, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered =
            hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.div key={index} variants={cardVariants}>
              <SolutionCard
                title={card.title}
                description={card.description}
                backgroundImage={card.backgroundImage}
                isHovered={isHovered}
                isOtherHovered={isOtherHovered}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="xl:hidden relative md:pl-20 mt-10"
        variants={containerVariants}
      >
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {solutionsData.map((solution, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered =
              hoveredIndex !== null && hoveredIndex !== index;
            return (
              <motion.div
                key={index}
                className="w-80 snap-center flex-shrink-0"
                variants={cardVariants}
              >
                <SolutionCard
                  title={solution.title}
                  description={solution.description}
                  backgroundImage={solution.backgroundImage}
                  isHovered={false}
                  isOtherHovered={false}
                  onMouseEnter={() => handleMouseEnter(index.toString())}
                  onMouseLeave={() => handleMouseLeave()}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Carousel Navigation Buttons */}
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
}
