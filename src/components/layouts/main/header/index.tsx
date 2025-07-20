"use client";

import { Logo } from "@/components/common/logo";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { DesktopNav } from "./desktop-navigation";
import { DesktopSecondaryNav } from "./desktop-secondary-navigation";
import MobileMenu from "./mobile-menu";
import { MobileNav } from "./mobile-navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5, stiffness: 80 }}
      className="fixed top-0 left-0 right-0 w-full  py-4  z-50 "
    >
      <div className="container px-4 mx-auto ">
        <div className="lg:mx-10 md:mx-5 bg-primary-brand px-5 rounded-2xl lg:pb-4 shadow-2xl">
          <div>
            <div className="text-white py-4">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <nav aria-label="Primary Navigation">
                  <DesktopNav />
                  <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
                </nav>
              </div>
            </div>
            <nav aria-label="Secondary Navigation">
              <DesktopSecondaryNav />
              <div
                className={`transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 h-auto"
                    : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                <MobileMenu />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
