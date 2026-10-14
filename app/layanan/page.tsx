import type { Metadata } from "next";
import { ServicesGrid } from "@/components/pages/layanan/services-grid";
import { PageHeader } from "@/components/layouts/page-header";

export const metadata: Metadata = {
  title: "Daftar Layanan & Harga",
  description:
    "Lihat pilihan layanan grooming Mono Barber, termasuk harga dan perkiraan durasinya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Menu Grooming Lengkap"
        title="Layanan & Harga"
        description="Jelajahi pilihan layanan grooming pria. Nama layanan, harga, dan durasi pada halaman ini masih berupa data demo."
        breadcrumbs={[{ label: "Layanan" }]}
      />
      <ServicesGrid />
    </>
  );
}
