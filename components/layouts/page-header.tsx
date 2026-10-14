import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageHeaderProps = {
  kicker?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHeader({
  kicker,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="bg-muted py-12 sm:py-16">
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label={site.labels.breadcrumb}
            className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground uppercase"
          >
            <Link
              href={site.routes.home}
              className="rounded-md transition-colors hover:text-foreground"
            >
              {site.labels.home}
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <LuChevronRight className="size-3 text-muted-foreground/60" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-foreground">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl space-y-3">
          {kicker && (
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              {kicker}
            </span>
          )}
          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-foreground uppercase sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
