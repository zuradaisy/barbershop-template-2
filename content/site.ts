const routes = {
  home: "/",
  services: "/layanan",
  team: "/tim",
  gallery: "/galeri",
  booking: "/booking",
};

export const site = {
  name: "MONO BARBER",
  tagline: "Classic Cuts, Modern Vibes",
  description:
    "Mono Barber menyediakan pilihan layanan grooming pria dengan pendekatan modern dan personal.",
  // Ganti dengan domain resmi sebelum website dipublikasikan.
  url: "https://example.com",
  routes,
  labels: {
    mainNavigation: "Navigasi utama",
    mobileNavigation: "Navigasi mobile",
    footerNavigation: "Navigasi footer",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    breadcrumb: "Breadcrumb",
    home: "Beranda",
    quickContact: "Kontak cepat WhatsApp",
    contactWhatsApp: "Hubungi WhatsApp Mono Barber",
    instagram: "Instagram Mono Barber",
    tiktok: "TikTok Mono Barber",
    youtube: "YouTube Mono Barber",
    whatsapp: "WhatsApp Mono Barber",
    studioAddress: "Alamat Studio",
    navbarBookingShort: "Booking WA",
    navbarBooking: "Booking via WhatsApp",
  },
  whatsappMessages: {
    navbarBooking: "Halo Mono Barber, saya ingin booking jadwal.",
    floatingBooking:
      "Halo Mono Barber, saya ingin bertanya dan booking jadwal.",
    footerBooking: "Halo Mono Barber, saya ingin bertanya tentang layanan.",
    ctaBooking: "Halo Mono Barber, saya ingin booking jadwal potong rambut.",
  },
  footer: {
    navigationTitle: "Navigasi",
    contactTitle: "Kontak & Alamat",
    hoursTitle: "Jam Operasional",
    openEveryDay: "Buka Setiap Hari",
    weekdayHours: "Senin – Minggu:",
    walkInNote:
      "Walk-in diterima sesuai ketersediaan kursi. Disarankan reservasi jadwal terlebih dahulu.",
    copyright: "Seluruh hak cipta dilindungi.",
    signature: "Dibuat dengan dedikasi di Jakarta Selatan.",
  },
  skipLinkLabel: "Lompat ke konten utama",
  theme: {
    toLight: "Aktifkan mode terang",
    toDark: "Aktifkan mode gelap",
  },
  contact: {
    // Ganti dengan nomor WhatsApp bisnis tanpa tanda + atau spasi.
    whatsappNumber: "6281234567890",
    phone: "+6281234567890",
    phoneDisplay: "0812-3456-7890",
    email: "halo@monobarber.example",
    address: {
      street: "Jl. Melati No. 12",
      city: "Bandung",
      region: "Jawa Barat",
      postalCode: "40115",
      full: "Jl. Melati No. 12, Bandung",
    },
    hours: {
      weekday: "09.00 – 21.00 WIB",
      weekend: "09.00 – 21.00 WIB",
      display: "Buka Setiap Hari: 09.00 – 21.00 WIB",
    },
    googleMapsUrl: "https://maps.google.com/?q=Jl.+Melati+No.+12,+Bandung",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    demoNotice: "Nomor, alamat, dan jam operasional ini data demo. Ganti dengan informasi bisnis yang benar sebelum situs dipublikasikan.",
  },
  socials: {
    instagram: {
      name: "Instagram",
      handle: "",
      url: "",
    },
    tiktok: {
      name: "TikTok",
      handle: "",
      url: "",
    },
    youtube: {
      name: "YouTube",
      handle: "",
      url: "",
    },
  },
  navigation: [
    { label: "Beranda", href: routes.home },
    { label: "Layanan", href: routes.services },
    { label: "Tim", href: routes.team },
    { label: "Galeri", href: routes.gallery },
    { label: "Booking", href: routes.booking },
  ],
};
