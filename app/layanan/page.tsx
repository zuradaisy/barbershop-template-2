import type { Metadata } from "next";
import { ServicesGrid } from "@/components/pages/layanan/services-grid";
import { PageHeader } from "@/components/layouts/page-header";

export const metadata: Metadata = {
  title: "Daftar Layanan & Harga",
  description:
    "Lihat pilihan layanan grooming Crosscut Barber, termasuk harga dan perkiraan durasinya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Menu Grooming Lengkap"
        title="Layanan & Harga"
        description="Jelajahi menu grooming Crosscut Barber, lengkap dengan deskripsi, harga, dan perkiraan durasi layanan."
        breadcrumbs={[{ label: "Layanan" }]}
      />
      <ServicesGrid />
    </>
  );
}
