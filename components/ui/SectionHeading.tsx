import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-medium text-gold">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl leading-[1.15] text-ivory sm:text-4xl md:text-[2.75rem]">
        {heading}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
