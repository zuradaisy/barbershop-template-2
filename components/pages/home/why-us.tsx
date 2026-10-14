import Image from "next/image";
import { LuArmchair, LuPackageCheck, LuUserRound } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";

export function WhyUs() {
  const { whyUs } = home;
  const icons = [LuUserRound, LuPackageCheck, LuArmchair];

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.2fr)] lg:grid-cols-[minmax(14rem,0.9fr)_minmax(0,1.2fr)_minmax(15rem,1fr)] lg:gap-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted">
            <Image
              src={whyUs.image}
              alt={whyUs.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 25vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <SectionHeading kicker={whyUs.kicker} title={whyUs.title} />
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
              {whyUs.description}
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-2 text-sm font-bold tracking-wide uppercase">
              {whyUs.advantagesTitle}
            </h3>
            <ul className="divide-y divide-border">
              {whyUs.points.map((point, index) => {
                const Icon = icons[index] ?? LuUserRound;
                return (
                  <li
                    key={point.title}
                    className="flex gap-3 py-4 first:pt-3 last:pb-0"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold tracking-wide uppercase sm:text-sm">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
