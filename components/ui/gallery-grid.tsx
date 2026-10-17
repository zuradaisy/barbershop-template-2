"use client";

import { useState } from "react";
import { buttonStyles } from "@/components/ui/button";
import { GalleryCard } from "@/components/ui/gallery-card";
import {
  beforeAfterCategoryFilters,
  beforeAfterItems,
  beforeAfterUi,
  type BeforeAfterCategory,
} from "@/content/gallery";

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
          className="mb-8 flex flex-wrap gap-2 border-b border-border/80 pb-6"
          role="group"
          aria-label={beforeAfterUi.categoriesLabel}
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={buttonStyles({
              variant: activeCategory === "all" ? "primary" : "outline",
              size: "sm",
              className: "rounded-sm font-semibold uppercase",
            })}
          >
            {beforeAfterUi.allCategoriesLabel}
          </button>
          {beforeAfterCategoryFilters.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              aria-pressed={activeCategory === category.key}
              className={buttonStyles({
                variant:
                  activeCategory === category.key ? "primary" : "outline",
                size: "sm",
                className: "rounded-sm font-semibold uppercase",
              })}
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
