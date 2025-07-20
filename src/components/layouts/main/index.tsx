import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import ScrollProgressButton from "@/components/common/scroll-progress-button";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollProgressButton />
    </>
  );
}
