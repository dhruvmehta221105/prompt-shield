import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-6",
        align === "center" && "mx-auto items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <p className="font-heading text-lg font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl font-semibold capitalize leading-tight text-white sm:text-4xl lg:text-[3.375rem] lg:leading-[4.375rem]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl font-body text-base leading-relaxed text-white/90">
          {description}
        </p>
      ) : null}
    </div>
  );
}
