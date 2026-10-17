const routes = {
  home: "/",
  services: "/layanan",
  team: "/tim",
  gallery: "/galeri",
  booking: "/booking",
};

export const site = {
  name: "CROSSCUT BARBER",
  tagline: "Classic Cuts, Modern Vibes",
  description:
    "Barbershop premium pria di Jakarta Selatan. Menggabungkan teknik potong rambut klasik dan tren kontemporer dengan layanan profesional, kapster berpengalaman, dan suasana nyaman.",
  url: "https://monobarber.tokigo.id",
  routes,
  labels: {
    mainNavigation: "Navigasi utama",
    mobileNavigation: "Navigasi mobile",
    footerNavigation: "Navigasi footer",
    socialNavigation: "Media sosial",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    breadcrumb: "Breadcrumb",
    home: "Beranda",
    quickContact: "Kontak cepat WhatsApp",
    contactWhatsApp: "Hubungi WhatsApp Crosscut Barber",
    instagram: "Instagram Crosscut Barber",
    tiktok: "TikTok Crosscut Barber",
    youtube: "YouTube Crosscut Barber",
    whatsapp: "WhatsApp Crosscut Barber",
    studioAddress: "Alamat Studio",
    navbarBookingShort: "Tanya Sekarang",
    navbarBooking: "Tanya Sekarang via WhatsApp",
  },
  whatsappMessages: {
    navbarBooking:
      "Halo Crosscut Barber, saya ingin bertanya tentang layanan dan ketersediaan jadwal.",
    floatingBooking:
      "Halo Crosscut Barber, saya ingin bertanya tentang layanan dan ketersediaan jadwal.",
    footerBooking: "Halo Crosscut Barber, saya ingin bertanya tentang layanan.",
    ctaBooking:
      "Halo Crosscut Barber, saya ingin bertanya tentang layanan dan jadwal potong rambut.",
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
    signature: "Dibuat di Jakarta Selatan.",
  },
  skipLinkLabel: "Lompat ke konten utama",
  theme: {
    toLight: "Aktifkan mode terang",
    toDark: "Aktifkan mode gelap",
  },
  contact: {
    whatsappNumber: "6281234567890",
    phone: "+6281234567890",
    phoneDisplay: "0812-3456-7890",
    email: "halo@monobarber.id",
    address: {
      street: "Jl. Senopati No. 45, Kebayoran Baru",
      city: "Jakarta Selatan",
      region: "DKI Jakarta",
      postalCode: "12190",
      full: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan 12190",
    },
    hours: {
      weekday: "09.00 – 21.00 WIB",
      weekend: "09.00 – 21.00 WIB",
      display: "Buka Setiap hari, 09.00 – 21.00 WIB",
    },
    googleMapsUrl: "https://maps.google.com/?q=Senopati+Jakarta+Selatan",
    coordinates: {
      latitude: -6.2307,
      longitude: 106.8089,
    },
  },
  socials: {
    instagram: {
      name: "Instagram",
      handle: "@monobarber.id",
      url: "https://instagram.com/monobarber.id",
    },
    tiktok: {
      name: "TikTok",
      handle: "@monobarber",
      url: "https://tiktok.com/@monobarber",
    },
    youtube: {
      name: "YouTube",
      handle: "Crosscut Barber Official",
      url: "https://youtube.com/@monobarber",
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
