import { NAV_ITEMS } from "@/constants/navigation.constant";
import Link from "next/link";
import { SearchButton, SignInButton } from "./button-components";

export const DesktopNav = () => (
  <div className="hidden lg:flex items-center space-x-2">
    <SearchButton
      className="text-white hover:text-white hover:bg-white/10"
      onClick={() => {}}
    />
    {NAV_ITEMS.main.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="text-xs font-medium hover:text-gray-200 transition-all whitespace-nowrap  p-2 focus:outline-none rounded-md focus:ring-2 focus:ring-primary  focus:border-white border border-transparent hover:border-gray-400 active:border-gray-600"
      >
        {item.label}
      </Link>
    ))}
    <SignInButton className="px-2" />
  </div>
);
