import Link from "next/link";
import { LuClock } from "react-icons/lu";
import { cn } from "@/lib/utils";

export type ServiceRowProps = {
  title: string;
  href?: string;
  description?: string;
  duration?: string;
  price?: string;
  number?: string;
  label?: string;
  className?: string;
};

export function ServiceRow({
  title,
  href,
  description,
  duration,
  price,
  number,
  label,
  className,
}: ServiceRowProps) {
  const titleContent = href ? <Link href={href}>{title}</Link> : title;

  return (
    <li
      className={cn(
        "-mx-3 rounded-sm border border-transparent px-3 py-5 transition-colors duration-150 focus-within:border-border focus-within:bg-muted/60 hover:border-border hover:bg-muted/60",
        className,
      )}
    >
      <div className="flex min-w-0 items-baseline gap-3 sm:gap-5">
        {number ? (
          <span className="w-10 shrink-0 font-display text-3xl leading-none font-bold text-muted-foreground/60 sm:w-14 sm:text-5xl">
            {number}
          </span>
        ) : null}
        <div className="flex min-w-0 flex-1 items-baseline gap-2 sm:gap-3">
          <h3 className="min-w-0 text-lg font-bold uppercase transition-colors hover:text-accent">
            {titleContent}
          </h3>
          {price ? (
            <span
              aria-hidden="true"
              className="mb-1.5 hidden h-px min-w-4 flex-1 bg-[repeating-linear-gradient(to_right,currentColor_0_8px,transparent_8px_14px)] text-muted-foreground/50 sm:block"
            />
          ) : null}
        </div>
        {price ? (
          <span className="shrink-0 text-base font-semibold">{price}</span>
        ) : null}
      </div>
      <div className="mt-1 flex flex-col justify-between gap-1 text-base text-muted-foreground sm:flex-row sm:items-start sm:gap-4">
        {description ? <p className="max-w-2xl">{description}</p> : null}
        {duration ? (
          <p className="inline-flex shrink-0 items-center gap-1.5 text-sm">
            <LuClock aria-hidden="true" className="size-3.5 text-accent" />
            {duration}
          </p>
        ) : null}
      </div>
      {label ? (
        <span className="mt-2 inline-block text-xs font-semibold text-accent">
          {label}
        </span>
      ) : null}
    </li>
  );
}
