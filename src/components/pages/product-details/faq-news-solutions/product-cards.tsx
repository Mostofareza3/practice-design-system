"use client";

import Text from "@/components/design-system/typography/body-text/Text";
import Heading from "@/components/design-system/typography/heading/Heading";
import ArrowIcon from "@/components/icons/arrow-icon";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export interface ProductCardProps {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  subtitle,
  title,
  description,
  image,
}) => {
  return (
    <motion.article
      className="bg-white rounded-t-2xl rounded-bl-2xl rounded-br-4xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl border border-gray-200 cursor-pointer hover:-translate-y-1"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="flex items-center justify-center px-5 pt-5"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image src={image} alt={title} width={50} height={50} />
      </motion.div>
      <div className="flex flex-col flex-1 p-5">
        <Text variant="body-small-accent" className="mb-1 text-fedpink">
          {subtitle}
        </Text>
        <Heading variant="heading-6" className="mb-1">
          {title}
        </Heading>
        <Text variant="body-base" className="flex-1 mb-4 line-clamp-3">
          {description}
        </Text>
        <motion.div
          className="flex items-center justify-end mt-auto pt-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowIcon direction="right" className="size-6 text-pink-600" />
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
