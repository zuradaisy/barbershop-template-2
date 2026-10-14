export type ServiceCategory = "haircut" | "beard" | "package" | "treatment";

export type Service = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
  categoryLabel: string;
  price: string;
  priceNumber: number;
  duration: string;
  durationMinutes: number;
  image: string;
  isPopular?: boolean;
  steps?: string[];
  benefits?: string[];
  idealFor?: string;
};

export const serviceCategories: { key: ServiceCategory; label: string }[] = [
  { key: "haircut", label: "Haircut & Styling" },
  { key: "beard", label: "Beard & Shaving" },
  { key: "package", label: "Paket Lengkap" },
  { key: "treatment", label: "Perawatan & Warna" },
];

export const serviceDataNotice =
  "Nama layanan, harga, dan durasi saat ini merupakan data demo.";

// Names, prices, durations, and images below were already present in the project data.
// Confirm them with the business before publishing; detailed claims are intentionally omitted.
export const services: Service[] = [
  {
    id: "classic-gentleman-cut",
    slug: "classic-gentleman-cut",
    name: "Classic Gentleman Haircut",
    shortDescription: "Layanan potong rambut pria.",
    fullDescription:
      "Pilihan layanan potong rambut dengan gaya yang dapat dibicarakan saat konsultasi.",
    category: "haircut",
    categoryLabel: "Haircut & Styling",
    price: "Rp 50.000",
    priceNumber: 50000,
    duration: "45 Menit",
    durationMinutes: 45,
    image: "/images/service-haircut.jpg",
    isPopular: true,
  },
  {
    id: "precision-beard-trim",
    slug: "precision-beard-trim",
    name: "Precision Beard Trim & Sculpt",
    shortDescription: "Layanan rapikan dan bentuk janggut.",
    fullDescription:
      "Pilihan grooming janggut dengan hasil akhir yang dapat disesuaikan.",
    category: "beard",
    categoryLabel: "Beard & Shaving",
    price: "Rp 30.000",
    priceNumber: 30000,
    duration: "25 Menit",
    durationMinutes: 25,
    image: "/images/service-beard.jpg",
  },
  {
    id: "hot-towel-shave",
    slug: "hot-towel-shave",
    name: "Traditional Hot Towel Shave",
    shortDescription: "Layanan cukur tradisional.",
    fullDescription: "Pilihan cukur wajah dengan metode tradisional.",
    category: "beard",
    categoryLabel: "Beard & Shaving",
    price: "Rp 35.000",
    priceNumber: 35000,
    duration: "30 Menit",
    durationMinutes: 30,
    image: "/images/service-side.jpg",
  },
  {
    id: "royal-executive-package",
    slug: "royal-executive-package",
    name: "Royal Executive Grooming Package",
    shortDescription: "Paket layanan grooming lengkap.",
    fullDescription:
      "Paket grooming yang menggabungkan beberapa layanan Mono Barber.",
    category: "package",
    categoryLabel: "Paket Lengkap",
    price: "Rp 120.000",
    priceNumber: 120000,
    duration: "75 Menit",
    durationMinutes: 75,
    image: "/images/service-royal.jpg",
    isPopular: true,
  },
  {
    id: "hair-color-toning",
    slug: "hair-color-toning",
    name: "Modern Hair Color & Grey Blending",
    shortDescription: "Pilihan layanan pewarnaan rambut.",
    fullDescription:
      "Layanan warna rambut dengan pilihan yang dibicarakan saat konsultasi.",
    category: "treatment",
    categoryLabel: "Perawatan & Warna",
    price: "Rp 95.000",
    priceNumber: 95000,
    duration: "60 Menit",
    durationMinutes: 60,
    image: "/images/service-color.jpg",
  },
  {
    id: "hair-spa-scalp-treatment",
    slug: "hair-spa-scalp-treatment",
    name: "Hair Spa & Scalp Detox Treatment",
    shortDescription: "Pilihan layanan perawatan rambut dan kulit kepala.",
    fullDescription: "Layanan perawatan rambut dan kulit kepala.",
    category: "treatment",
    categoryLabel: "Perawatan & Warna",
    price: "Rp 75.000",
    priceNumber: 75000,
    duration: "45 Menit",
    durationMinutes: 45,
    image: "/images/location-interior.jpg",
  },
  {
    id: "junior-gentleman-cut",
    slug: "junior-gentleman-cut",
    name: "Junior Gentleman Cut (Anak & Remaja)",
    shortDescription: "Layanan potong rambut anak dan remaja.",
    fullDescription: "Pilihan potong rambut untuk anak dan remaja.",
    category: "haircut",
    categoryLabel: "Haircut & Styling",
    price: "Rp 40.000",
    priceNumber: 40000,
    duration: "35 Menit",
    durationMinutes: 35,
    image: "/images/gallery-crop.jpg",
  },
];

export const serviceUi = {
  detailAction: "Lihat Detail",
  detailBookingMessage: (service: Service) =>
    `Halo Mono Barber, saya ingin mengajukan booking untuk ${service.name} (${service.price}, ${service.duration}). Mohon info jadwal yang tersedia.`,
};
