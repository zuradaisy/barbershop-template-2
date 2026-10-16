import type { Metadata } from "next";
import { TeamList } from "@/components/pages/tim/team-list";
import { PageHeader } from "@/components/layouts/page-header";

export const metadata: Metadata = {
  title: "Tim & Kapster Profesional",
  description:
    "Kenali profil kapster Crosscut Barber dan pilihan layanan grooming.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        kicker="Master Groomers"
        title="Tim & Kapster Kami"
        description="Kenali kapster Crosscut Barber, pengalaman, dan spesialisasi layanan grooming mereka."
        breadcrumbs={[{ label: "Tim" }]}
      />
      <TeamList />
    </>
  );
}
