export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
  cutStyle?: string;
  barber?: string;
  quote: string;
  date?: string;
  isDemo: boolean;
};

export const testimonialsUi = {
  previousLabel: "Testimoni sebelumnya",
  nextLabel: "Testimoni berikutnya",
  paginationLabel: "Pilih testimoni",
};

// Kutipan di bawah adalah dummy. Rating tidak diisi sebelum ada ulasan asli terverifikasi.
export const testimonials: Testimonial[] = [
  {
    id: "testi-demo-1",
    name: "Rizky Aditya",
    role: "Contoh pelanggan",
    rating: 5,
    quote: "Fade-nya rapi dan sesuai request. Barber-nya juga profesional.",
    isDemo: true,
  },
  {
    id: "testi-demo-2",
    name: "Dimas Pratama",
    role: "Contoh pelanggan",
    rating: 5,
    quote: "Hasil potongannya sesuai dengan gaya yang saya inginkan.",
    isDemo: true,
  },
  {
    id: "testi-demo-3",
    name: "Fahmi Salim",
    role: "Contoh pelanggan",
    rating: 5,
    quote: "Sesi grooming terasa nyaman dan hasilnya rapi.",
    isDemo: true,
  },
];
