"use client";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import TestimonialCard from "./testimonial-card";

const testimonials = [
  {
    quote:
      "Working to maximize products and target expectations on the end result to get my clients the best solutions.",
    name: "Lukman",
    role: "CEO",
    avatarSrc: "/assets/common/extra/sample-avatar.png",
  },
  {
    quote:
      "Working to maximize products and target expectations on the end result to get my clients the best solutions.",
    name: "Lukman",
    role: "CEO",
    avatarSrc: "/assets/common/extra/sample-avatar.png",
  },
  {
    quote:
      "Working to maximize products and target expectations on the end result to get my clients the best solutions.",
    name: "Lukman",
    role: "CEO",
    avatarSrc: "/assets/common/extra/sample-avatar.png",
  },
];

const Testimonial = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
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
      className="md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.div className="max-w-3xl mx-auto" variants={textVariants}>
        <SectionHeader
          subtitle="What our clients say"
          title="Real stories, real impact"
          titleClassName="text-black text-center"
          subtitleClassName="text-center"
        />
        <motion.p
          className="text-black text-center mt-5"
          variants={textVariants}
          transition={{ delay: 0.05 }}
        >
          Empower yourself with these educational and insightful articles about
          market trends, investment news, contributions from our thought
          leaders, and exciting announcements!
        </motion.p>
      </motion.div>

      <motion.div
        className="py-10"
        variants={textVariants}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          className="hidden xl:flex flex-wrap gap-6 justify-center pb-10"
          variants={cardVariants}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ delay: i * 0.08 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="xl:hidden relative" variants={cardVariants}>
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-80 snap-center flex-shrink-0"
                variants={cardVariants}
                transition={{ delay: index * 0.08 }}
              >
                <TestimonialCard {...testimonial} />
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
    </motion.div>
  );
};

export default Testimonial;
