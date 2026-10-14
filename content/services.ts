export type ServiceCategory = "haircut" | "beard" | "package" | "treatment";

export const serviceCategories: { key: ServiceCategory; label: string }[] = [
  { key: "haircut", label: "Haircut & Styling" },
  { key: "beard", label: "Beard & Shaving" },
  { key: "package", label: "Paket Lengkap" },
  { key: "treatment", label: "Perawatan & Warna" },
];

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
  steps: string[];
  benefits: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    id: "classic-gentleman-cut",
    slug: "classic-gentleman-cut",
    name: "Classic Gentleman Haircut",
    shortDescription:
      "Potong rambut presisi sesuai bentuk kepala, cuci bersih dengan hair tonic, dan styling pomade premium.",
    fullDescription:
      "Layanan potong rambut andalan Mono Barber. Dimulai dengan konsultasi mendalam untuk menentukan potongan yang paling sesuai dengan proporsi wajah dan jenis rambut Anda. Dikerjakan dengan teknik gunting dan clipper presisi, dilanjutkan keramas air hangat menyegarkan, pijatan kepala ringan, pengeringan, serta penataan menggunakan pomade pilihan.",
    category: "haircut",
    categoryLabel: "Haircut & Styling",
    price: "Rp 50.000",
    priceNumber: 50000,
    duration: "45 Menit",
    durationMinutes: 45,
    image: "/images/service-haircut.jpg",
    steps: [
      "Konsultasi gaya rambut & analisis pola tumbuh rambut",
      "Pemotongan presisi (scissors work & fade clipper blending)",
      "Pembersihan leher & garis tepi dengan razor steril",
      "Keramas air hangat dengan sampo revitalizing",
      "Aplikasi cooling hair tonic & pijat relaksasi kepala",
      "Blow dry & styling pomade sesuai selera (matte/gloss)",
    ],
    benefits: [
      "Garis fade yang rapi dan tahan hingga 3-4 minggu",
      "Relaksasi kepala setelah seharian beraktivitas",
      "Edukasi cara merawat dan menata rambut di rumah",
    ],
    idealFor:
      "Pria yang menginginkan potongan rapi, tegas, dan mudah ditata sehari-hari.",
  },
  {
    id: "precision-beard-trim",
    slug: "precision-beard-trim",
    name: "Precision Beard Trim & Sculpt",
    shortDescription:
      "Rapikan dan bentuk garis janggut/kumis presisi dengan kompres handuk hangat dan beard oil.",
    fullDescription:
      "Perawatan khusus untuk pria berjanggut. Kami merapikan panjang dan ketebalan janggut, membentuk garis tepi tajam di rahang dan leher, serta memberikan nutrisi beard oil agar rambut wajah tetap lembut, rapi, dan harum maskulin.",
    category: "beard",
    categoryLabel: "Beard & Shaving",
    price: "Rp 30.000",
    priceNumber: 30000,
    duration: "25 Menit",
    durationMinutes: 25,
    image: "/images/service-beard.jpg",
    steps: [
      "Analisis pola pertumbuhan janggut dan kontur rahang",
      "Trimming ketebalan dan meratakan gradasi janggut",
      "Kompres handuk hangat (hot towel) beraroma eucalyptus",
      "Pencukuran garis rapi dengan straight razor pisau baru",
      "Aplikasi aftershave soothing balm dan organic beard oil",
    ],
    benefits: [
      "Bentuk janggut lebih simetris dan tegas memperkuat rahang",
      "Bebas gatal dan ketombe janggut berkat nutrisi oil alami",
      "Kulit leher bebas iritasi (razor burn)",
    ],
    idealFor:
      "Pria yang memelihara janggut, brewok, atau kumis dan ingin garis tepi yang selalu on-point.",
  },
  {
    id: "hot-towel-shave",
    slug: "hot-towel-shave",
    name: "Traditional Hot Towel Shave",
    shortDescription:
      "Cukur basah tradisional dengan 2 sesi kompres handuk hangat, foam tebal, dan straight razor higienis.",
    fullDescription:
      "Pengalaman cukur klasik khas barbershop otentik. Menenangkan pori-pori wajah dengan handuk hangat, aplikasi lather busa hangat, dan pencukuran bersih tanpa sisa menggunakan mata pisau steril sekali pakai. Ditutup dengan kompres dingin untuk menyegarkan kulit.",
    category: "beard",
    categoryLabel: "Beard & Shaving",
    price: "Rp 35.000",
    priceNumber: 35000,
    duration: "30 Menit",
    durationMinutes: 30,
    image: "/images/service-side.jpg",
    steps: [
      "Pembersihan wajah dan persiapan pre-shave oil",
      "Kompres handuk hangat pertama untuk melunakkan bulu",
      "Pengaplikasian busa cukur kaya busa (warm lather)",
      "Pencukuran ultra-halus searah dan berlawanan arah bulu",
      "Kompres handuk dingin untuk menutup pori-pori",
      "Aftershave lotion pelembap anti iritasi",
    ],
    benefits: [
      "Kulit wajah terasa halus licin dan segar",
      "Eksfoliasi alami sel kulit mati di area jenggot",
      "Pengalaman relaksasi mental yang menenangkan",
    ],
    idealFor:
      "Pria yang menginginkan kulit wajah bersih klimis dan bebas bulu halus.",
  },
  {
    id: "royal-executive-package",
    slug: "royal-executive-package",
    name: "Royal Executive Grooming Package",
    shortDescription:
      "Paket perawatan lengkap: Haircut + Beard Grooming + Hot Towel + Pijat Leher & Kepala + Face Refresh.",
    fullDescription:
      "Layanan terlengkap dan paling diminati di Mono Barber. Didesain untuk pria yang menginginkan transformasi maksimal dari ujung rambut hingga wajah dalam satu sesi privat tanpa terburu-buru. Meremajakan tubuh sekaligus mempertegas gaya.",
    category: "package",
    categoryLabel: "Paket Lengkap",
    price: "Rp 120.000",
    priceNumber: 120000,
    duration: "75 Menit",
    durationMinutes: 75,
    image: "/images/gallery-fade.jpg",
    steps: [
      "Sesi konsultasi gaya & potong rambut premium",
      "Trimming atau straight razor shaving janggut/kumis",
      "Double kompres handuk hangat relaksasi",
      "Keramas deep cleanse dengan sampo menthol segar",
      "Pijat relaksasi bahu, leher, dan kulit kepala 15 menit",
      "Masker wajah charcoal peel-off pembersih komedo",
      "Blow styling & premium pomade application",
    ],
    benefits: [
      "Hemat biaya dibanding memesan menu secara terpisah",
      "Tampilan total look yang segar sebelum meeting penting atau acara spesial",
      "Mengurangi ketegangan otot leher dan bahu akibat stres kerja",
    ],
    idealFor:
      "Pria modern yang ingin tampil prima 100% untuk acara formal, kencan, atau self-reward mingguan.",
  },
  {
    id: "hair-color-toning",
    slug: "hair-color-toning",
    name: "Modern Hair Color & Grey Blending",
    shortDescription:
      "Pewarnaan rambut trendi (ash grey, brown, matte blonde) atau penyamaran uban natural tanpa merusak rambut.",
    fullDescription:
      "Ubah penampilan Anda dengan pewarnaan profesional yang aman untuk kulit kepala. Menggunakan formulasi amonia rendah berkualitas impor yang melindungi kelembapan helai rambut pria.",
    category: "treatment",
    categoryLabel: "Perawatan & Warna",
    price: "Rp 95.000",
    priceNumber: 95000,
    duration: "60 Menit",
    durationMinutes: 60,
    image: "/images/service-royal.jpg",
    steps: [
      "Konsultasi warna dan tes sensitivitas kulit",
      "Aplikasi bleaching bertahap (jika diperlukan)",
      "Pewarnaan dengan toning pigmen premium",
      "Proses oksidasi dan peresapan warna terkontrol",
      "Pencucian dengan shampoo color-lock dan kondisioner",
      "Styling akhir dan panduan perawatan warna di rumah",
    ],
    benefits: [
      "Warna rambut merata dan berkilau alami",
      "Menyamarkan uban dengan hasil natural tanpa terlihat belang",
      "Formula lembut tidak membuat rambut kaku seperti ijuk",
    ],
    idealFor:
      "Pria yang ingin bereksperimen dengan warna rambut trendi atau tampil lebih awet muda.",
  },
  {
    id: "hair-spa-scalp-treatment",
    slug: "hair-spa-scalp-treatment",
    name: "Hair Spa & Scalp Detox Treatment",
    shortDescription:
      "Perawatan intensif ketombe, rambut rontok, dan kulit kepala berminyak dengan serum herbal dan pijat titik akupresur.",
    fullDescription:
      "Solusi untuk masalah rambut berminyak, gatal, dan ketombe yang sering dialami pria beraktivitas tinggi di luar ruangan. Membersihkan residu minyak dan pomade menumpuk pada folikel rambut.",
    category: "treatment",
    categoryLabel: "Perawatan & Warna",
    price: "Rp 75.000",
    priceNumber: 75000,
    duration: "45 Menit",
    durationMinutes: 45,
    image: "/images/gallery-crop.jpg",
    steps: [
      "Pemeriksaan kondisi kulit kepala",
      "Eksfoliasi scalp scrub pembersih kotoran",
      "Penguapan ringan untuk membuka pori folikel",
      "Pengaplikasian hair mask bernutrisi tinggi",
      "Pijat titik akupresur kepala dan pundak",
      "Rinse bersih dan aplikasi hair growth tonic",
    ],
    benefits: [
      "Kulit kepala terasa ringan, segar, dan bebas rasa gatal",
      "Mengurangi kerontokan dan memperkuat akar rambut",
      "Membersihkan sisa produk styling yang menyumbat pori",
    ],
    idealFor:
      "Pria aktif, pengguna helm harian, atau yang sering menggunakan produk styling berat.",
  },
  {
    id: "junior-gentleman-cut",
    slug: "junior-gentleman-cut",
    name: "Junior Gentleman Cut (Anak & Remaja)",
    shortDescription:
      "Potongan rambut keren dan sabar untuk anak-anak hingga usia 12 tahun dengan suasana ramah dan menyenangkan.",
    fullDescription:
      "Kapster kami terlatih menangani anak-anak dengan kesabaran ekstra dan pendekatan bersahabat agar si kecil merasa aman, senang, dan pulang dengan potongan rambut super rapi.",
    category: "haircut",
    categoryLabel: "Haircut & Styling",
    price: "Rp 40.000",
    priceNumber: 40000,
    duration: "35 Menit",
    durationMinutes: 35,
    image: "/images/gallery-beard.jpg",
    steps: [
      "Pendekatan ramah agar anak merasa nyaman di kursi potong",
      "Konsultasi model rambut bersama orang tua",
      "Pemotongan lembut dengan peralatan ramah anak",
      "Pembersihan sisa rambut dengan bedak lembut",
      "Styling ringan dengan kid-friendly pomade beraroma manis",
    ],
    benefits: [
      "Pengalaman potong rambut tanpa tangis dan stres",
      "Model rambut trendi untuk sekolah maupun acara keluarga",
      "Hadiah stiker / permen ramah anak setelah selesai",
    ],
    idealFor:
      "Anak laki-laki dan remaja yang ingin tampil rapi untuk sekolah atau momen spesial.",
  },
];

export const serviceUi = {
  back: "Kembali ke layanan",
  aboutTitle: "Tentang layanan ini",
  durationLabel: "Durasi",
  stepsTitle: "Tahapan pengerjaan",
  benefitsTitle: "Manfaat & hasil",
  favoriteLabel: "Favorit",
  allServicesLabel: "Semua layanan",
  reservationEyebrow: "Reservasi jadwal",
  reservationTitle: "Ajukan layanan ini",
  reservationDescription:
    "Pilih tanggal dan jam pilihan. Permintaan menunggu konfirmasi barbershop.",
  confirmationNote:
    "Permintaan jadwal belum terkonfirmasi sampai Anda mendapat balasan dari barbershop.",
  serviceLabel: "Layanan",
  priceLabel: "Harga",
  detailAction: "Lihat detail",
  whatsappAction: "Tanya Sekarang",
  formAction: "Booking",
  whatsappMessage: (service: Service) =>
    `Halo Mono Barber, saya ingin bertanya tentang ketersediaan jadwal untuk layanan ${service.name} (${service.price}, ${service.duration}).`,
};
