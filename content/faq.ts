export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "booking-mandatory",
    question: "Bagaimana cara mengajukan booking?",
    answer:
      "Isi preferensi layanan dan jadwal pada formulir, lalu lanjutkan melalui WhatsApp. Booking baru terkonfirmasi setelah mendapat balasan dari barbershop.",
  },
  {
    id: "cut-duration",
    question: "Berapa lama durasi setiap layanan?",
    answer: "Durasi tertera pada setiap layanan di halaman Layanan dan Harga.",
  },
  {
    id: "walk-in",
    question: "Apakah bisa walk-in?",
    answer:
      "Silakan tanyakan ketersediaan kursi melalui WhatsApp sebelum berkunjung.",
  },
  {
    id: "payment-methods",
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Informasi metode pembayaran dapat ditanyakan langsung kepada barbershop.",
  },
  {
    id: "products-used",
    question: "Produk apa saja yang digunakan selama perawatan?",
    answer:
      "Informasi produk yang digunakan dapat ditanyakan kepada barber saat konsultasi.",
  },
  {
    id: "reschedule-policy",
    question: "Bagaimana jika saya ingin mengubah jadwal (reschedule)?",
    answer:
      "Hubungi barbershop melalui WhatsApp untuk menanyakan perubahan jadwal.",
  },
];
