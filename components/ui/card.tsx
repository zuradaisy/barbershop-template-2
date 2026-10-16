import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-border bg-muted/40 p-4 shadow-panel",
        className,
      )}
      {...props}
    />
  );
}
