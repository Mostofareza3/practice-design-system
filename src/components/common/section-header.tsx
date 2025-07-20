import { cn } from "@/lib/utils";
import Heading from "../design-system/typography/heading/Heading";
import Text, { TextVariant } from "../design-system/typography/body-text/Text";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  subtitleVariant?: TextVariant;
}

export default function SectionHeader({
  subtitle,
  title,
  className,
  subtitleClassName,
  titleClassName,
  subtitleVariant = "descriptor-accent",
}: SectionHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-1", className)}>
      <Text
        variant={subtitleVariant}
        className={cn("text-fedpink", subtitleClassName)}
      >
        {subtitle}
      </Text>
      <Heading
        variant="heading-2"
        className={cn("text-primary-brand", titleClassName)}
      >
        {title}
      </Heading>
    </header>
  );
}
