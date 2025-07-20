import Text from "@/components/design-system/typography/body-text/Text";
import Heading from "@/components/design-system/typography/heading/Heading";
import ArrowIcon from "@/components/icons/arrow-icon";
// import { ArrowRight, Heading } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface NewsCardProps {
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  title,
  description,
  date,
  image,
}) => {
  return (
    <article className="bg-white rounded-br-2xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1">
      <div className="relative w-full h-40 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <Text variant="descriptor-accent-small" className="mb-1 text-fedpink">
          {category}
        </Text>
        <Heading variant="heading-2-small" className="mb-1">
          {title}
        </Heading>
        <Text variant="body-base" className="flex-1 mb-4 line-clamp-3">
          {description}
        </Text>
        <div className="flex items-center justify-between mt-auto pt-2">
          <Text variant="body-x-small" className="text-secondary">{date}</Text>
          <ArrowIcon direction="right" className="w-4 h-4 text-fedpink" />
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
