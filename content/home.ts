import { site } from "@/content/site";

export const home = {
  hero: {
    kicker: "MONO BARBER · GROOMING PRIA",
    title: "UBAH PENAMPILAN,\nTEGASKAN GAYA",
    description:
      "Temukan gaya yang terasa seperti diri Anda melalui layanan grooming Mono Barber.",
    image: "/images/hero-barber.jpg",
    imageAlt: "Kapster Mono Barber sedang merapikan rambut pelanggan",
    bookingLabel: "Booking",
    bookingHref: "#booking-form",
    servicesLabel: "Lihat Layanan",
    servicesHref: site.routes.services,
  },
  whyUs: {
    kicker: "Tentang Kami",
    title: "Mono Barber",
    description:
      "Mono Barber berfokus pada grooming pria dengan pilihan gaya dan layanan yang dapat disesuaikan melalui konsultasi.",
    image: "/images/about.avif",
    imageAlt: "Alat-alat grooming di atas meja barber",
    advantagesTitle: "Keunggulan Kami",
    points: [
      {
        title: "KAPSTER BERPENGALAMAN",
        description:
          "Diskusikan bentuk dan gaya rambut yang Anda inginkan sebelum memilih layanan.",
      },
      {
        title: "PRODUK PREMIUM",
        description:
          "Pilih dari menu potong rambut, perawatan janggut, cukur, dan paket grooming.",
      },
      {
        title: "SUASANA NYAMAN",
        description:
          "Suasana barbershop dirancang agar sesi grooming terasa nyaman dan personal.",
      },
    ],
  },
  servicesPreview: {
    kicker: "Pilihan Grooming",
    title: "LAYANAN & HARGA",
    description: "Semua sesi sudah termasuk konsultasi dan penataan.",
    viewAllLabel: "Lihat Semua Layanan",
    viewAllHref: site.routes.services,
  },
  bookingForm: {
    accessibleSectionLabel: "Form booking cepat",
    descriptionFor: (serviceName: string) =>
      `Kirim permintaan booking untuk ${serviceName}. Pilih tanggal dan jam kunjungan yang Anda inginkan.`,
    nameLabel: "Nama Lengkap",
    phoneLabel: "Nomor WhatsApp",
    phoneValidation: "Masukkan nomor WhatsApp yang valid.",
    serviceLabel: "Pilih layanan",
    dateLabel: "Tanggal pilihan",
    timeLabel: "Jam pilihan",
    timeZoneLabel: "WIB",
    submitLabel: "Booking",
    successMessage:
      "WhatsApp terbuka. Permintaan jadwal Anda belum terkonfirmasi sampai barbershop membalas.",
    pendingNote:
      "Tanggal dan jam adalah preferensi; jadwal menunggu konfirmasi barbershop.",
    messageIntro: "Halo Mono Barber, saya ingin mengajukan booking:",
  },
  galleryPreview: {
    kicker: "Portfolio & Hasil Potong",
    title: "HASIL KERJA",
    viewAllLabel: "Lihat Galeri →",
    viewAllHref: site.routes.gallery,
  },
  teamPreview: {
    kicker: "MASTER GROOMERS",
    title: "TIM KAMI",
    viewAllLabel: "Lihat Semua Tim →",
    viewAllHref: site.routes.team,
  },
  testimonials: {
    kicker: "ULASAN PELANGGAN",
    title: "KATA MEREKA",
  },
  ctaBanner: {
    title: "SIAP TAMPIL RAPI?",
    subtitle:
      "Sampaikan gaya dan waktu yang Anda inginkan. Jadwal akan dikonfirmasi melalui WhatsApp.",
    action: {
      label: "Tanya Sekarang",
      message: site.whatsappMessages.ctaBooking,
    },
  },
  faqAndContact: {
    faqKicker: "Tanya Jawab",
    contactKicker: "Kunjungan",
    addressLabel: site.labels.studioAddress,
    hoursLabel: site.footer.hoursTitle,
    phoneLabel: "Telepon",
    contactUnavailable:
      "Alamat, nomor kontak, dan jam operasional akan ditampilkan setelah data resmi tersedia.",
    whatsappAction: "Tanya Sekarang",
    mapsAction: "Buka Google Maps",
    faqTitle: "PERTANYAAN UMUM",
    contactTitle: "LOKASI & KONTAK",
  },
};
