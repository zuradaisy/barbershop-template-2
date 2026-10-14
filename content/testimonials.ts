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
};

export const testimonialsUi = {
  previousLabel: "Testimoni sebelumnya",
  nextLabel: "Testimoni berikutnya",
  paginationLabel: "Pilih testimoni",
};

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Kevin Pratama",
    role: "Digital Marketer, Senopati",
    quote:
      "Hasil potongan selalu konsisten rapi dari awal buka sampai sekarang. Fade-nya halus banget dan kapsternya komunikatif, selalu ngasih saran yang pas buat bentuk muka.",
  },
  {
    id: "testi-2",
    name: "Dimas Anggara",
    role: "Founder Creative Studio, SCBD",
    quote:
      "Tempatnya nyaman banget, bersih, full AC, dan ada free artisan coffee. Pijat pundak pas paket Royal juara banget bikin rileks setelah seminggu deadline padat.",
  },
  {
    id: "testi-3",
    name: "Fahmi Salim",
    role: "Architect, Kemang",
    quote:
      "Cari barbershop yang paham bentuk brewok dan rahang susah banget, tapi di Mono Barber hasilnya presisi dan garisnya tajam rapi. Sangat recommended buat grooming rutin.",
  },
];
