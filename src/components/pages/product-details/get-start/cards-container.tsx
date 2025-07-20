"use client";
import { Button } from "@/components/ui/button";
import { GetStartedCard } from "@/interfaces/contact.interface";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ActionCard from "./action-card";

interface CardsContainerProps {
  cards: GetStartedCard[];
  className?: string;
}

const CardsContainer = ({ cards, className = "" }: CardsContainerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
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
    hidden: { opacity: 0, y: 20 },
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
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.nav
      className={`container mx-auto px-4 lg:mt-20 mt-10 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.div
        className="hidden w-fit mx-auto lg:flex flex-row gap-8 justify-center items-center"
        variants={containerVariants}
      >
        {cards.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ActionCard card={card} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="lg:hidden relative overflow-hidden"
        variants={containerVariants}
      >
        <motion.div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full min-w-full flex-none snap-center"
              variants={cardVariants}
            >
              <div className="px-4">
                <ActionCard card={card} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2"
          variants={buttonVariants}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="rounded-full bg-white shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="rounded-full bg-white shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default CardsContainer;
