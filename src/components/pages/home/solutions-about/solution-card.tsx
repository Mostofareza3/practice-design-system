"use client";
import ArrowIcon from "@/components/icons/arrow-icon";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  isHovered: boolean;
  isOtherHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function SolutionCard({
  title,
  description,
  backgroundImage,
  isHovered,
  isOtherHovered,
  onMouseEnter,
  onMouseLeave,
}: SolutionCardProps) {
  return (
    <motion.article
      className={`group relative rounded-t-2xl rounded-bl-2xl rounded-br-[40px] overflow-hidden cursor-pointer transition-all duration-300 h-[360px] ${
        isOtherHovered
          ? "opacity-80 saturate-50 brightness-75"
          : isHovered
          ? "opacity-100 saturate-110 brightness-110"
          : "opacity-100"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
      }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end text-white gap-4">
        <div>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="leading-relaxed opacity-90">{description}</p>
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-end">
          <ArrowIcon direction="right" className="w-5 h-5" />
        </div>
      </div>
    </motion.article>
  );
}
