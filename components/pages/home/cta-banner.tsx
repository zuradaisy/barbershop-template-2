import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { home } from "@/content/home";
import { whatsappLink } from "@/lib/links";
import { buttonStyles } from "@/components/ui/button";

export function CtaBanner() {
  const { ctaBanner } = home;

  return (
    <section className="bg-inverse py-14 text-inverse-foreground sm:py-18">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-inverse-foreground uppercase sm:text-3xl lg:text-4xl">
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
