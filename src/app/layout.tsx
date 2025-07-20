import type { Metadata } from "next";
// Import only the fonts you are using in design system's typography.
import { Bitter, Inter, Montserrat, Roboto_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fedgroup",
  description: "Fedgroup is a platform for managing your finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${bitter.variable} ${robotoMono.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
