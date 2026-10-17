import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { home } from "@/content/home";
import { whatsappLink } from "@/lib/links";
import { buttonStyles } from "@/components/ui/button";

export function CtaBanner() {
  const { ctaBanner } = home;

  return (
    <section className="bg-inverse py-20 text-inverse-foreground lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <h2 className="font-display text-[32px] leading-[1.05] font-bold tracking-tight text-inverse-foreground uppercase sm:text-[40px]">
              {ctaBanner.title}
            </h2>
            <p className="text-base text-inverse-foreground/80">
              {ctaBanner.subtitle}
            </p>
          </div>

          <a
            href={whatsappLink(ctaBanner.action.message)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({
              variant: "inverse",
              size: "lg",
              className: "shrink-0",
            })}
          >
            <FaWhatsapp className="size-5" />
            <span>{ctaBanner.action.label}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
