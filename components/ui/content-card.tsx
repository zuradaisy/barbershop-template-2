import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ContentCardAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "outline";
  icon?: ReactNode;
};

export type ContentCardAspect = "video" | "portrait";

export type ContentCardProps = {
  variant?: "default" | "service" | "profile" | "row";
  aspect?: ContentCardAspect;
  title: string;
  href?: string;
  eyebrow?: string;
  meta?: string;
  metaIcon?: ReactNode;
  description?: string;
  price?: string;
  number?: string;
  image?: { src: string; alt: string };
  imageBadge?: string;
  tags?: string[];
  actions?: ContentCardAction[];
  className?: string;
};

export function ContentCard({
  variant = "default",
  aspect = "video",
  title,
  href,
  eyebrow,
  meta,
  metaIcon,
  description,
  price,
  number,
  image,
  imageBadge,
  tags = [],
  actions = [],
  className,
}: ContentCardProps) {
  const isCatalogCard = variant === "service" || variant === "profile";
  const titleContent = href ? (
    <Link
      href={href}
      className={
        isCatalogCard ? "transition-colors group-hover/card:text-accent" : ""
      }
    >
      {title}
    </Link>
  ) : (
    title
  );

  if (variant === "row") {
    return (
      <article className={cn("py-5", className)}>
        <div className="flex min-w-0 items-baseline gap-3">
          {number ? (
            <span className="w-6 shrink-0 text-xs font-semibold text-muted-foreground">
              {number}
            </span>
          ) : null}
          <div className="flex min-w-0 flex-1 items-baseline gap-2">
            <h3 className="min-w-0 text-sm font-bold uppercase sm:text-base">
              {titleContent}
            </h3>
            {price ? (
              <span
                aria-hidden="true"
                className="mb-1.5 hidden min-w-4 flex-1 border-b border-dotted border-muted-foreground/50 sm:block"
              />
            ) : null}
          </div>
          {price ? (
            <span className="shrink-0 text-sm font-extrabold sm:text-lg">
              {price}
            </span>
          ) : null}
        </div>
        <div className="mt-1 flex flex-col justify-between gap-1 text-sm text-muted-foreground sm:flex-row sm:items-start sm:gap-4">
          {description ? <p className="max-w-2xl">{description}</p> : null}
          {meta ? <p className="shrink-0">{meta}</p> : null}
        </div>
        {eyebrow ? (
          <span className="mt-2 inline-block text-xs font-semibold text-accent">
            {eyebrow}
          </span>
        ) : null}
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group/card flex h-full flex-col overflow-hidden rounded-sm border transition-colors duration-150",
        isCatalogCard
          ? "border-border bg-muted/40 hover:border-muted-foreground/40 hover:bg-background"
          : "border-transparent bg-background",
        !isCatalogCard && (href || actions.length > 0) && "hover:border-border",
        className,
      )}
    >
      {image ? (
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            aspect === "portrait" ? "aspect-[4/5]" : "aspect-video",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
            {eyebrow ? (
              <span className="rounded-sm bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground uppercase">
                {eyebrow}
              </span>
            ) : null}
            {imageBadge ? (
              <span className="rounded-sm bg-accent px-2 py-1 text-[10px] font-bold text-accent-foreground uppercase">
                {imageBadge}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        {meta || price ? (
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            {meta ? (
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {metaIcon}
                {meta}
              </p>
            ) : null}
            {price ? <p className="font-bold">{price}</p> : null}
          </div>
        ) : null}
        <h3 className="text-base font-extrabold uppercase sm:text-lg">
          {titleContent}
        </h3>
        {description ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
        {tags.length > 0 ? (
          <ul className="mt-1 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-border px-2 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {actions.length > 0 ? (
        <div className="mt-auto flex gap-2 p-5 pt-0 sm:p-6 sm:pt-0">
          {actions.map((action) => {
            const className = buttonStyles({
              variant: action.variant ?? "primary",
              size: "md",
              className:
                "w-full bg-inverse text-inverse-foreground hover:bg-inverse/90",
            });

            return action.external ? (
              <a
                key={`${action.label}-${action.href}`}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {action.icon}
                {action.label}
              </a>
            ) : (
              <Link
                key={`${action.label}-${action.href}`}
                href={action.href}
                className={className}
              >
                {action.icon}
                {action.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}
