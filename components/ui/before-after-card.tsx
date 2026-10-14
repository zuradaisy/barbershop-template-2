"use client";

import Image from "next/image";
import { useState } from "react";
import {
  beforeAfterCategoryFilters,
  beforeAfterUi,
  type BeforeAfterItem,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

export type BeforeAfterCardProps = {
  item: BeforeAfterItem;
  showTags?: boolean;
  className?: string;
};

export function BeforeAfterCard({
  item,
  showTags = false,
  className,
}: BeforeAfterCardProps) {
  const [view, setView] = useState<"before" | "after">("after");

  const hasBeforeImage = Boolean(item.beforeImage);
  const currentView = hasBeforeImage ? view : "after";
  const currentImage =
    currentView === "before"
      ? (item.beforeImage ?? item.afterImage)
      : item.afterImage;

  return (
    <article className={cn("group flex flex-col gap-3", className)}>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={currentImage}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover photo-mono transition-transform duration-250 ease-smooth group-hover:scale-105 motion-reduce:transition-none"
        />

        {hasBeforeImage ? (
          <div className="absolute top-3 left-3 flex overflow-hidden rounded-md border border-border bg-background/90 p-0.5">
            <button
              type="button"
              onClick={() => setView("before")}
              aria-pressed={currentView === "before"}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-bold uppercase transition-colors",
                currentView === "before"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {beforeAfterUi.beforeLabel}
            </button>
            <button
              type="button"
              onClick={() => setView("after")}
              aria-pressed={currentView === "after"}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-bold uppercase transition-colors",
                currentView === "after"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {beforeAfterUi.afterLabel}
            </button>
          </div>
        ) : null}
      </div>

      {showTags ? (
        <ul
          className="flex flex-wrap gap-2"
          aria-label={beforeAfterUi.categoriesLabel}
        >
          {item.categories.map((category) => {
            const label = beforeAfterCategoryFilters.find(
              (filter) => filter.key === category,
            )?.label;

            return label ? (
              <li
                key={category}
                className="rounded-sm border border-border px-2 py-1 text-xs font-semibold text-muted-foreground"
              >
                {label}
              </li>
            ) : null;
          })}
        </ul>
      ) : null}
    </article>
  );
}
