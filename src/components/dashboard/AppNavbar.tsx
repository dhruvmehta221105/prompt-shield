"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ScanSearch, LayoutDashboard, House } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const APP_LINKS = [
  {
    label: "Scanner",
    href: "/scanner",
    icon: ScanSearch,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Home",
    href: "/",
    icon: House,
  },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg-dark/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-[98px]">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center rounded-full bg-nav-pill px-4 py-3 backdrop-blur-[25px] md:flex md:gap-2 lg:gap-4">
          {APP_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2 font-heading text-base font-semibold text-white transition-all duration-300 hover:text-accent",
                  isActive &&
                    "bg-gradient-to-br from-[#0a767b] to-[#00a7d6] text-white hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
        >
          {mobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-bg-dark/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {APP_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 font-heading font-semibold text-white transition-colors",
                      isActive
                        ? "bg-gradient-to-r from-[#0a767b] to-[#00a7d6]"
                        : "hover:bg-white/5"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}