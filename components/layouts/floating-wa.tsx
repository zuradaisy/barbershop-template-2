import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/links";

export function FloatingWa() {
  return (
    <aside
      aria-label={site.labels.quickContact}
      className="fixed right-4 bottom-5 z-30 flex items-center md:hidden"
    >
      <a
        href={whatsappLink(site.whatsappMessages.floatingBooking)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={site.labels.contactWhatsApp}
        className="flex size-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <FaWhatsapp className="size-6.5" />
      </a>
    </aside>
  );
}
