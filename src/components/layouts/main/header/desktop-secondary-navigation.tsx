"use client";
import { HomeIcon } from "@/components/icons/home-icon";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/navigation.constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DesktopSecondaryNavItem } from "./desktop-secondary-nav-item";

export const DesktopSecondaryNav = () => {
  const path = usePathname();
  return (
    <div className="bg-white/90 border-t border-gray-200 px-2 py-0 rounded-2xl max-lg:hidden">
      <div className="hidden lg:flex items-center">
        <div className="pr-1">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "text-gray-600 hover:text-white hover:bg-primary-brand p-2 group focus:bg-primary-brand  "
            )}
          >
            {path === "/" ? (
              <HomeIcon
                variant="fill"
                className="text-primary-brand group-hover:text-white group-focus:text-white"
              />
            ) : (
              <HomeIcon
                variant="outline"
                className="text-primary-brand group-hover:text-white group-focus:text-white"
              />
            )}
          </Button>
        </div>
        <div className="h-10 border-r border-gray-300 mr-2" />
        {NAV_ITEMS.secondary.map((item) => {
          return <DesktopSecondaryNavItem key={item.label} item={item} />;
        })}
      </div>
    </div>
  );
};
