"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { Card } from "@/components/ui/card";
import { faqItems } from "@/content/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Card className="divide-y divide-border overflow-hidden p-0">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/30 sm:p-6"
            >
              <span className="font-sans text-base font-semibold text-foreground">
                {item.question}
              </span>
              <LuChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180 text-accent",
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </Card>
  );
}
