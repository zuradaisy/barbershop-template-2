"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { BeforeAfterCard } from "@/components/ui/before-after-card";
import {
  beforeAfterCategoryFilters,
  beforeAfterItems,
  beforeAfterUi,
  type BeforeAfterCategory,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

export function BeforeAfterGrid() {
  const [activeCategory, setActiveCategory] = useState<
    BeforeAfterCategory | "all"
  >("all");
  const filteredItems =
    activeCategory === "all"
      ? beforeAfterItems
      : beforeAfterItems.filter((item) =>
          item.categories.includes(activeCategory),
        );

  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-bold uppercase transition-colors",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
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
                "rounded-md px-3 py-1.5 text-xs font-bold uppercase transition-colors",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} showTags />
          ))}
        </div>
      </Container>
    </Section>
  );
}
