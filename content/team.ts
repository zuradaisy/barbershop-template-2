export type Barber = {
  id: string;
  name: string;
  role: string;
  title: string;
  experience: string;
  specialization: string[];
  bio: string;
  photo: string;
  isDemo: boolean;
};

// Semua profil di bawah ini adalah data demonstrasi, bukan identitas staf sebenarnya.
export const teamMembers: Barber[] = [
  {
    id: "fahdil-pratama-demo",
    name: "Fahdil Pratama",
    role: "Head Barber",
    title: "Head Barber",
    experience: "5+ tahun (demo)",
    specialization: ["Fade", "Classic Cut"],
    bio: "Profil demonstrasi untuk menampilkan tata letak tim. Ganti dengan detail yang telah disetujui.",
    photo: "/images/team-radja.jpg",
    isDemo: true,
  },
  {
    id: "duta-guntur-demo",
    name: "Duta Guntur",
    role: "Senior Barber",
    title: "Senior Barber",
    experience: "3+ tahun (demo)",
    specialization: ["Beard Grooming", "Taper"],
    bio: "Profil demonstrasi untuk menampilkan tata letak tim. Ganti dengan detail yang telah disetujui.",
    photo: "/images/team-duta.jpg",
    isDemo: true,
  },
  {
    id: "reza-fahrezi-demo",
    name: "Reza Fahrezi",
    role: "Barber",
    title: "Barber",
    experience: "2+ tahun (demo)",
    specialization: ["Classic Cut", "Styling"],
    bio: "Profil demonstrasi untuk menampilkan tata letak tim. Ganti dengan detail yang telah disetujui.",
    photo: "/images/team-reza.jpg",
    isDemo: true,
  },
];

export const teamUi = {
  scheduleLabel: "Jadwal",
  bookingLabel: "Ajukan Booking",
  demoNotice:
    "Data nama, peran, pengalaman, dan foto di halaman ini adalah contoh untuk keperluan desain.",
};
