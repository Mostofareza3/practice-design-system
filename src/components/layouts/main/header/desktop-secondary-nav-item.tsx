"use client";
import { Button } from "@/components/ui/button";
import { SecondaryNavItem } from "@/interfaces/common.interface";
import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface DesktopSecondaryNavItemProps {
  item: SecondaryNavItem;
}

export const DesktopSecondaryNavItem = ({
  item,
}: DesktopSecondaryNavItemProps) => {
  const pathname = usePathname();
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setOpenMegaMenu(label);
  };

  const handleMouseLeave = () => {
    setOpenMegaMenu(null);
  };

  const isActive = item.includedRoutes.includes(pathname);
  return (
    <div className="flex items-center" key={item.label}>
      {item.href === "/resources" && (
        <div className="h-12 border-r border-gray-300 mx-2" />
      )}
      <div>
        <div
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 rounded-t-xl cursor-pointer  border-t-2 border-x-2",
            openMegaMenu === item.label && "bg-white  border-gray-400/30",
            isActive && "text-primary-brand"
          )}
        >
          <span>{item.label}</span>
          {item.megaMenu && (
            <ChevronDown
              className={cn(
                "h-3 w-3 ml-1 transition-transform duration-300",
                openMegaMenu === item.label && "rotate-180"
              )}
            />
          )}
        </div>
        {item.megaMenu && (
          <div
            className={cn(
              "absolute left-0 w-full z-50 transition-all duration-300 ease-in-out ",
              openMegaMenu === item.label
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            )}
          >
            <div className="container mx-auto px-14">
              <div
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                className=" p-8  bg-white rounded-2xl shadow-2xl"
              >
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6 text-fedpink"
                    onClick={() => setOpenMegaMenu(null)}
                  >
                    <X className="size-6 text-fedpink" />
                  </Button>
                </div>
                {item.megaMenu}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
