import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button";
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
        "flex flex-col items-start gap-3 sm:gap-4",
        align === "center" ? "items-center text-center" : "text-left",
        className,
      )}
    >
      <div className={cn("space-y-2", align === "center" && "max-w-2xl")}>
        {kicker && (
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            {kicker}
          </span>
        )}
        <h2 className="font-display text-[32px] leading-[1.05] font-bold tracking-tight text-foreground uppercase sm:text-[40px]">
          {title}
        </h2>
        {description && (
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {actionLink && (
        <Link
          href={actionLink.href}
          className={buttonStyles({
            variant: "ghost",
            size: "md",
            className:
              "group h-auto gap-2 px-0 py-0 text-base font-normal text-muted-foreground hover:text-accent",
          })}
        >
          <span>{actionLink.label}</span>
          <LuArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
