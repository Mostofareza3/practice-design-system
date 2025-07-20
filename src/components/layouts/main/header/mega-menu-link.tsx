"use client";
import ArrowIcon from "@/components/icons/arrow-icon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MegaMenuLinkProps {
  href: string;
  title: string;
  description: string;
}

export const MegaMenuLink = ({
  href,
  title,
  description,
}: MegaMenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block px-3 py-2 w-full rounded-lg transition-all duration-300 ease-in-out group border-2 border-transparent  focus:ring-2 focus:ring-primary  focus:border-white focus:outline-none active:bg-black",
        isActive ? "bg-black" : "hover:bg-secondary"
      )}
    >
      <div className="flex justify-between">
        <p
          className={cn(
            "font-bold transition-colors duration-300",
            isActive ? "text-white" : "text-gray-700 group-hover:text-white"
          )}
        >
          {title}
        </p>
        <ArrowIcon direction="right" />
      </div>
      <p
        className={cn(
          "text-xs transition-colors duration-300 truncate max-sm:max-w-[200px]",
          isActive ? "text-white" : "text-gray-500 group-hover:text-white"
        )}
      >
        {description}
      </p>
    </Link>
  );
};
