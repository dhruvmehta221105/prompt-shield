import type { Metadata } from "next";
import { Poppins, Titillium_Web } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — AI Prompt Security`,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", titillium.variable, poppins.variable)}
    >
      <body className="min-h-screen bg-bg-dark font-body text-white antialiased">
        {children}
      </body>
    </html>
  );
}
