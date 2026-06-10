import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn(
        "font-heading text-2xl font-semibold leading-tight text-white sm:text-[2.375rem] sm:leading-[3rem]",
        className
      )}
      aria-label="PromptShield home"
    >
      Prompt<span className="text-accent">Shield</span>
    </Link>
  );
}
