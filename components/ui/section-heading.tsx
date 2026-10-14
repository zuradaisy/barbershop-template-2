import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  actionLink?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  actionLink,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3",
        align === "center" ? "items-center text-center" : "text-left",
        className,
      )}
    >
      <div className={cn("space-y-1", align === "center" && "max-w-2xl")}>
        {kicker && (
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            {kicker}
          </span>
        )}
        <h2 className="font-display text-3xl leading-[1.05] font-bold tracking-tight text-foreground uppercase sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-xs text-muted-foreground sm:text-sm">
            {description}
          </p>
        )}
      </div>

      {actionLink && (
        <Link
          href={actionLink.href}
          className="group inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <span>{actionLink.label}</span>
          <LuArrowRight className="size-3.5" />
        </Link>
      )}
    </div>
  );
}
