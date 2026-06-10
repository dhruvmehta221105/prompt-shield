"use client";

import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  size?: "default" | "sm";
  fullWidth?: boolean;
}

const buttonClassName = (
  size: "default" | "sm",
  fullWidth: boolean,
  className?: string
) =>
  cn(
    "inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0a767b] to-[#00a7d6] font-heading font-bold text-white transition-shadow hover:shadow-[0_0_20px_rgba(62,213,221,0.45)] active:scale-[0.97]",
    size === "default" && "px-6 py-4 text-xl leading-6",
    size === "sm" && "px-4 py-2 text-base leading-6",
    fullWidth && "w-full",
    className
  );

export function GradientButton({
  className,
  children,
  asChild = false,
  size = "default",
  fullWidth = false,
  ...props
}: GradientButtonProps) {
  const classes = buttonClassName(size, fullWidth, className);

  if (asChild) {
    return (
      <Slot.Root className={classes} {...props}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
