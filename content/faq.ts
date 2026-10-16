export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "booking-mandatory",
    question:
      "Apakah harus booking terlebih dahulu atau bisa langsung walk-in?",
    answer:
      "Kami menerima walk-in jika kursi tersedia. Namun, untuk menghindari waktu tunggu, kami sangat menyarankan reservasi jadwal terlebih dahulu melalui form booking atau WhatsApp.",
  },
  {
    id: "cut-duration",
    question: "Berapa lama durasi potong rambut rata-rata?",
    answer:
      "Rata-rata potong rambut memakan waktu sekitar 40 hingga 50 menit, mencakup sesi konsultasi bentuk wajah, pemotongan presisi, cuci rambut, pemijatan ringan, dan penataan pomade.",
  },
  {
    id: "parking-facility",
    question: "Apakah tersedia area parkir untuk mobil dan motor?",
    answer:
      "Ya, Crosscut Barber memiliki area parkir gratis yang luas dan aman untuk kendaraan roda dua maupun mobil tepat di depan outlet.",
  },
  {
    id: "payment-methods",
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima pembayaran tunai (cash) serta non-tunai melalui QRIS (BCA, GoPay, OVO, ShopeePay, Dana, dll.) dan kartu debit.",
  },
  {
    id: "products-used",
    question: "Produk apa saja yang digunakan selama perawatan?",
    answer:
      "Kami hanya menggunakan produk grooming berkualitas premium seperti water-based & oil-based pomade, hair tonic beraroma maskulin segar, serta beard balm berbahan alami.",
  },
  {
    id: "reschedule-policy",
    question: "Bagaimana jika saya ingin mengubah jadwal (reschedule)?",
    answer:
      "Anda dapat melakukan reschedule dengan menghubungi WhatsApp kami minimal 2 jam sebelum jam kunjungan yang dijadwalkan tanpa biaya tambahan.",
  },
];
