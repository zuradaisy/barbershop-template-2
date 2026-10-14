"use client";

import { useState } from "react";
import { GalleryCard } from "@/components/ui/gallery-card";
import {
  beforeAfterCategoryFilters,
  beforeAfterItems,
  beforeAfterUi,
  type BeforeAfterCategory,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

export type GalleryGridProps = {
  items?: typeof beforeAfterItems;
  limit?: number;
  showFilters?: boolean;
  showTitles?: boolean;
};

export function GalleryGrid({
  items = beforeAfterItems,
  limit,
  showFilters = false,
  showTitles = true,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<
    BeforeAfterCategory | "all"
  >("all");
  const filteredItems = items.filter(
    (item) =>
      activeCategory === "all" || item.categories.includes(activeCategory),
  );
  const visibleItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {showFilters ? (
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label={beforeAfterUi.categoriesLabel}
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "px-3 py-2 text-xs font-bold uppercase transition-colors",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {beforeAfterUi.allCategoriesLabel}
          </button>
          {beforeAfterCategoryFilters.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              aria-pressed={activeCategory === category.key}
              className={cn(
                "px-3 py-2 text-xs font-bold uppercase transition-colors",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            showTitle={showTitles}
            showTags={showFilters}
          />
        ))}
      </div>
    </div>
  );
}
