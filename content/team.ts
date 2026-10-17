export type Barber = {
  id: string;
  name: string;
  role: string;
  title: string;
  experience: string;
  specialization: string[];
  bio: string;
  photo: string;
};

export const teamMembers: Barber[] = [
  {
    id: "radja-pratama",
    name: "Radja Pratama",
    role: "Head Barber & Founder",
    title: "Head Barber & Founder",
    experience: "8+ Tahun Pengalaman",
    specialization: ["Scissors Cut", "Fade"],
    bio: "Berpengalaman lebih dari 8 tahun di industri grooming pria. Menguasai teknik gunting manual presisi dan gradasi fade.",
    photo: "/images/tim1.avif",
  },
  {
    id: "duta-guntur",
    name: "Duta Guntur",
    role: "Senior Barber",
    title: "Senior Barber",
    experience: "6+ Tahun Pengalaman",
    specialization: ["Beard Grooming", "Traditional Shave"],
    bio: "Spesialis perawatan janggut dan cukur tradisional. Membentuk garis janggut agar selaras dengan kontur wajah.",
    photo: "/images/tim2.jpg",
  },
  {
    id: "reza-fahrezi",
    name: "Reza Fahrezi",
    role: "Stylist & Colorist",
    title: "Stylist & Colorist",
    experience: "5+ Tahun Pengalaman",
    specialization: ["Modern Styling", "Hair Color"],
    bio: "Berfokus pada potongan rambut kontemporer, tekstur rambut, dan layanan pewarnaan.",
    photo: "/images/tim3.avif",
  },
  {
    id: "arief-maulana",
    name: "Arief Maulana",
    role: "Grooming & Scalp Specialist",
    title: "Grooming & Scalp Specialist",
    experience: "4+ Tahun Pengalaman",
    specialization: ["Scalp Treatment", "Relaxing Massage"],
    bio: "Menangani perawatan kulit kepala serta sesi pijat relaksasi kepala, leher, dan pundak.",
    photo: "/images/tim4.jpg",
  },
];
