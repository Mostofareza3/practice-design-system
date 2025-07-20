import { NAV_ITEMS } from "@/constants/navigation.constant";
import { SecondaryNavItem } from "@/interfaces/common.interface";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SearchButton, SignInButton } from "./button-components";

const MobileMenu = () => {
  const [megaMenu, setOpenMegaMenu] = useState<SecondaryNavItem | null>(null);

  return (
    <div className="lg:hidden pb-5 overflow-y-auto max-h-[calc(100vh)]">
      {/* Top bar with search and sign in */}
      <div className="flex items-center justify-between px-4 py-3">
        <SearchButton className="text-white" />
        <SignInButton className="bg-white text-primary hover:bg-gray-100" />
      </div>
      {/* Menu content */}
      {!megaMenu && (
        <div className="px-2 py-2 bg-white/90 rounded-2xl">
          {/* Home link */}
          <Link
            href="/"
            className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-gray-900 font-semibold text-base hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5 " /> Home
            </span>
            <span className="ml-2 text-gray-400">→</span>
          </Link>
          <div className="h-[1px] bg-gray-300"></div>
          {/* Secondary nav (accordion) */}
          {NAV_ITEMS.secondary.map((item, i) => (
            <div key={i}>
              {item.href === "/resources" && (
                <div className="h-[1px] bg-gray-300"></div>
              )}
              <div
                onClick={() => setOpenMegaMenu(item)}
                className="px-3 py-2 text-base flex items-center justify-between font-medium text-gray-900 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                {item.label}
                <ChevronRight className="size-3" />
              </div>
            </div>
          ))}
          <div className="h-[1px] bg-gray-300"></div>
          {/* Main nav links */}
          <div className="flex flex-col gap-1 border-t border-gray-200 pt-2">
            {NAV_ITEMS.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-base text-gray-900 hover:bg-gray-100"
              >
                {item.label}
                <span className="ml-2 text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      {megaMenu && (
        <div className="px-2 py-2 bg-white/90 rounded-2xl">
          <div
            className="flex items-center justify-start sm:px-3 py-2 rounded-lg text-base text-gray-900 hover:bg-gray-100 cursor-pointer gap-2"
            onClick={() => setOpenMegaMenu(null)}
          >
            <ChevronLeft className="size-3" />
            {megaMenu.label}
          </div>
          {megaMenu.megaMenu}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
