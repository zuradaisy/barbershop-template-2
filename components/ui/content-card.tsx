import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LuArrowRight } from "react-icons/lu";
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
  aspect?: ContentCardAspect;
  title: string;
  href?: string;
  eyebrow?: string;
  meta?: string;
  metaIcon?: ReactNode;
  description?: string;
  price?: string;
  image?: { src: string; alt: string };
  imageBadge?: string;
  tags?: string[];
  actions?: ContentCardAction[];
  className?: string;
};

export function ContentCard({
  aspect = "video",
  title,
  href,
  eyebrow,
  meta,
  metaIcon,
  description,
  price,
  image,
  imageBadge,
  tags = [],
  actions = [],
  className,
}: ContentCardProps) {
  const isInteractive = Boolean(href || actions.length > 0);

  return (
    <Card
      className={cn(
        "group/card relative flex flex-col overflow-hidden bg-background p-0 transition-colors duration-150",
        image ? "h-full" : "h-fit self-start",
        href && "cursor-pointer",
        isInteractive && "hover:border-muted-foreground/40 hover:bg-muted/60",
        className,
      )}
    >
      {href ? (
        <Link
          href={href}
          aria-label={title}
          className="absolute inset-0 z-0 rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
        />
      ) : null}
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
              <Badge
                variant="primary"
                className="rounded-sm px-2 py-1 text-[10px] font-bold uppercase"
              >
                {eyebrow}
              </Badge>
            ) : null}
            {imageBadge ? (
              <Badge
                variant="primary"
                className="rounded-sm px-2 py-1 text-[10px] font-bold uppercase"
              >
                {imageBadge}
              </Badge>
            ) : null}
          </div>
        </div>
      ) : null}

      <div
        className={cn(
          "flex flex-col gap-3 p-6 sm:p-8",
          image && "flex-1",
          actions.length > 0 && "pb-0",
        )}
      >
        {eyebrow && !image ? (
          <Badge variant="primary" className="self-start">
            {eyebrow}
          </Badge>
        ) : null}
        {meta || price ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            {meta ? (
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                {metaIcon}
                {meta}
              </p>
            ) : null}
            {price ? <p className="text-base font-semibold">{price}</p> : null}
          </div>
        ) : null}
        <h3 className="text-lg font-bold uppercase">{title}</h3>
        {description ? (
          <p className="text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
        {tags.length > 0 ? (
          <ul className="mt-1 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="rounded-sm px-2 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {actions.length > 0 ? (
        <div className={cn("flex gap-2 p-6 pt-6 sm:p-8", image && "mt-auto")}>
          {actions.map((action) => {
            const className = buttonStyles({
              variant: action.variant ?? "primary",
              size: "lg",
              className: "relative z-10 w-full text-base font-semibold",
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
                <LuArrowRight aria-hidden="true" className="size-4" />
              </a>
            ) : (
              <Link
                key={`${action.label}-${action.href}`}
                href={action.href}
                className={className}
              >
                {action.icon}
                {action.label}
                <LuArrowRight aria-hidden="true" className="size-4" />
              </Link>
            );
          })}
        </div>
      ) : null}
    </Card>
  );
}
