import type { Metadata } from "next";
import { TeamList } from "@/components/pages/tim/team-list";
import { PageHeader } from "@/components/layouts/page-header";

export const metadata: Metadata = {
  title: "Tim & Kapster Profesional",
  description:
    "Kenali profil kapster Mono Barber dan pilihan layanan grooming.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        kicker="Master Groomers"
        title="Tim & Kapster Kami"
        description="Profil di halaman ini merupakan contoh tata letak. Ganti dengan identitas dan informasi tim yang telah dikonfirmasi sebelum situs dipublikasikan."
        breadcrumbs={[{ label: "Tim" }]}
      />
      <TeamList />
    </>
  );
}
