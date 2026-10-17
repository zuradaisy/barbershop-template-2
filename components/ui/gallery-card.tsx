import Image from "next/image";
import { useState } from "react";
import {
  beforeAfterCategoryFilters,
  beforeAfterUi,
  type BeforeAfterItem,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

export type GalleryCardProps = {
  item: BeforeAfterItem;
  showTitle?: boolean;
  showTags?: boolean;
  className?: string;
};

export function GalleryCard({
  item,
  showTitle = true,
  showTags = false,
  className,
}: GalleryCardProps) {
  const [view, setView] = useState<"before" | "after">("after");
  const currentImage =
    view === "before" && item.beforeImage ? item.beforeImage : item.afterImage;

  return (
    <article className={cn("group", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
        <Image
          src={currentImage}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {item.beforeImage ? (
          <div className="absolute top-3 left-3 inline-flex overflow-hidden rounded-sm border border-background/70 bg-background/90 p-0.5">
            {(["before", "after"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setView(option)}
                aria-pressed={view === option}
                className={cn(
                  "rounded-sm px-3 py-1.5 text-xs font-bold uppercase",
                  view === option
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {option === "before"
                  ? beforeAfterUi.beforeLabel
                  : beforeAfterUi.afterLabel}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {showTitle && item.title ? (
        <h3 className="mt-3 text-base font-semibold tracking-wide uppercase">
          {item.title}
        </h3>
      ) : null}
      {showTags ? (
        <ul
          className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground"
          aria-label={beforeAfterUi.categoriesLabel}
        >
          {item.categories.map((category) => {
            const label = beforeAfterCategoryFilters.find(
              (filter) => filter.key === category,
            )?.label;
            return label ? <li key={category}>{label}</li> : null;
          })}
        </ul>
      ) : null}
    </article>
  );
}
