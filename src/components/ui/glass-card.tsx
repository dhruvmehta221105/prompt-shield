"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  highlighted = false,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: "0 0 24px rgba(62, 213, 221, 0.25)",
            }
          : undefined
      }
      className={cn(
        " rounded-3xl border border-white/10 transition-all duration-300 hover:border-white/60 pb-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
