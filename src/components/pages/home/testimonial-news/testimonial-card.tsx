"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
}: TestimonialCardProps) {
  const cardVariants = {
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

  return (
    <motion.article
      className="max-w-[330px] bg-white rounded-t-4xl rounded-br-4xl rounded-bl-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      <blockquote className="relative">
        <p className="text-fedpink mb-6 italic px-6 pt-6">{quote}</p>
        <Image
          src="/quote.png"
          alt="Decorative opening quote"
          className="absolute -bottom-5 right-0"
          width={31.42}
          height={26.6}
        />
        <Image
          src="/quote.png"
          alt="Decorative closing quote"
          className="absolute top-2 left-2 rotate-180"
          width={31.42}
          height={26.6}
        />
      </blockquote>
      <footer className="flex items-center gap-3 px-6 pb-6">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={`${name}'s avatar`} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <cite className="font-semibold text-black not-italic">{name}</cite>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </footer>
    </motion.article>
  );
}
