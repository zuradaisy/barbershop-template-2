import type { BadgeVariant } from "@/components/ui/badge";
import type { ButtonSize, ButtonVariant } from "@/components/ui/button";

export type ColorToken = {
  group: "Palet inti" | "Token fungsional";
  name: string;
  className: string;
  usage: string;
};

export type TypeSample = {
  name: string;
  className: string;
  sample: string;
  usage: string;
};

export type IconInfo = {
  name: string;
  pack: string;
  usage: string;
};

export type IconSizeInfo = {
  size: string;
  usage: string;
};

export type RadiusToken = {
  name: string;
  className: string;
  usage: string;
};

export type ButtonVariantInfo = {
  variant: ButtonVariant;
  label: string;
  usage: string;
};

export type ButtonSizeInfo = {
  size: ButtonSize;
  label: string;
  usage: string;
};

export type BadgeVariantInfo = {
  variant: BadgeVariant;
  label: string;
  usage: string;
};

export type FormFieldInfo = {
  label: string;
  placeholder?: string;
  hint?: string;
  error?: string;
};

export type CardExampleInfo = {
  badge: string;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
};

export type SelectFieldInfo = {
  label: string;
  options: string[];
};

export type LayoutTokenInfo = {
  name: string;
  usage: string;
};

export type MotionDurationInfo = {
  name: string;
  usage: string;
};

export const designSystem = {
  hero: {
    eyebrow: "Design System",
    title: "Satu sumber kebenaran untuk tampilan proyek.",
    description:
      "Semua warna, tipografi, radius, dan komponen inti terdokumentasi di halaman ini. Setiap token, komponen, atau varian baru wajib ditambahkan ke sini agar desain proyek tetap konsisten.",
  },
  colors: {
    title: "Warna",
    description:
      "Palet inti memakai enam warna yang sama di seluruh UI. Token fungsional dipakai hanya untuk kebutuhan khusus; mode gelap menyesuaikan nilai token yang sama agar tetap terbaca.",
    tokens: [
      {
        group: "Palet inti",
        name: "--background",
        className: "bg-background",
        usage: "Latar halaman.",
      },
      {
        group: "Palet inti",
        name: "--foreground",
        className: "bg-foreground",
        usage: "Teks utama dan elemen gelap.",
      },
      {
        group: "Token fungsional",
        name: "--primary",
        className: "bg-primary",
        usage: "Aksi utama seperti tombol dan tautan penting.",
      },
      {
        group: "Token fungsional",
        name: "--primary-foreground",
        className: "bg-primary-foreground",
        usage: "Teks dan ikon di atas warna primary.",
      },
      {
        group: "Palet inti",
        name: "--muted",
        className: "bg-muted",
        usage: "Latar sekunder, hover, dan kartu.",
      },
      {
        group: "Palet inti",
        name: "--muted-foreground",
        className: "bg-muted-foreground",
        usage: "Teks sekunder dan keterangan.",
      },
      {
        group: "Palet inti",
        name: "--border",
        className: "bg-border",
        usage: "Garis batas dan pemisah.",
      },
      {
        group: "Token fungsional",
        name: "--ring",
        className: "bg-ring",
        usage: "Ring fokus untuk navigasi keyboard.",
      },
      {
        group: "Token fungsional",
        name: "--destructive",
        className: "bg-destructive",
        usage: "Error validasi dan aksi berbahaya.",
      },
      {
        group: "Palet inti",
        name: "--accent",
        className: "bg-accent",
        usage:
          "Aksen merah bata CROSSCUT BARBER (#ba2d0b); di tema gelap nilainya dibuat lebih terang agar tetap kontras. Berbeda dari token destructive untuk error.",
      },
      {
        group: "Token fungsional",
        name: "--accent-foreground",
        className: "bg-accent-foreground",
        usage: "Teks dan ikon di atas aksen dengan kontras AA.",
      },
      {
        group: "Token fungsional",
        name: "--inverse",
        className: "bg-inverse",
        usage: "Permukaan invers untuk CTA dan footer; mengikuti tema aktif.",
      },
      {
        group: "Token fungsional",
        name: "--inverse-foreground",
        className: "bg-inverse-foreground",
        usage: "Teks dan ikon di atas latar inverse.",
      },
      {
        group: "Token fungsional",
        name: "--whatsapp",
        className: "bg-whatsapp",
        usage: "Warna identitas pada tombol WhatsApp.",
      },
      {
        group: "Token fungsional",
        name: "--whatsapp-foreground",
        className: "bg-whatsapp-foreground",
        usage: "Ikon dan teks pada tombol WhatsApp.",
      },
      {
        group: "Token fungsional",
        name: "--hero-scrim",
        className: "bg-hero-scrim",
        usage: "Lapisan gelap untuk menjaga keterbacaan teks pada foto hero.",
      },
      {
        group: "Token fungsional",
        name: "--hero-foreground",
        className: "bg-hero-foreground",
        usage: "Teks pada hero foto yang memakai lapisan gelap.",
      },
    ] satisfies ColorToken[],
  },
  theme: {
    title: "Tema",
    description:
      "Light dan dark mode memakai token yang sama; nilai gelap ada di blok .dark di styles/theme.css. Pasang ThemeToggle di header atau footer, dan pastikan semua halaman tetap nyaman serta kontras di dua mode.",
    toggleNote: "Klik tombol untuk mencoba light/dark.",
  },
  typography: {
    title: "Tipografi",
    scaleTitle: "Skala teks",
    description:
      "Manrope 400/600/700 dipakai untuk isi dan UI. Oswald 700 dipakai untuk judul editorial; heading membesar bertahap dari section ke halaman dan hero.",
    samples: [
      {
        name: "Display",
        className:
          "font-display text-5xl leading-none font-bold tracking-tight sm:text-7xl lg:text-8xl",
        sample: "Judul utama halaman.",
        usage: "Satu per halaman, dipakai di hero.",
      },
      {
        name: "Judul section",
        className:
          "font-display text-[32px] leading-tight font-bold sm:text-[40px]",
        sample: "Judul bagian konten.",
        usage: "Pembuka setiap section.",
      },
      {
        name: "Judul kartu",
        className: "text-lg font-bold",
        sample: "Nama kartu atau item.",
        usage: "Judul di dalam kartu dan daftar.",
      },
      {
        name: "Isi",
        className: "text-base leading-relaxed font-normal",
        sample: "Paragraf untuk penjelasan panjang.",
        usage: "Teks isi utama.",
      },
      {
        name: "Harga layanan",
        className: "text-base font-semibold",
        sample: "Rp 85.000",
        usage: "Informasi harga yang perlu mudah ditemukan.",
      },
      {
        name: "Keterangan",
        className: "text-sm font-normal text-muted-foreground",
        sample: "Catatan pendukung yang lebih kecil.",
        usage: "Durasi layanan dan informasi sekunder.",
      },
    ] satisfies TypeSample[],
  },
  font: {
    title: "Font",
    sample: "Contoh tampilan font proyek.",
    current: "--font-display untuk heading · --font-sans untuk isi/UI",
    description:
      "Oswald 700 memberi heading yang padat dan tegas. Manrope 400/600/700 menjaga isi dan kontrol tetap bersih dan mudah dibaca. Hero memakai 48/72/96px, heading section 32/40px, judul kartu 18px, teks isi dan label form 16px, serta helper dan metadata 14px.",
  },
  radius: {
    title: "Radius",
    description:
      "Radius bertingkat dari satu token dasar: small mengurangi 2px, medium memakai nilai dasar, dan large menambah 4px. Potret tim tetap bulat sebagai treatment khusus.",
    tokens: [
      {
        name: "--radius-sm",
        className: "rounded-sm",
        usage: "Panel dan kartu informasi.",
      },
      {
        name: "--radius-md",
        className: "rounded-md",
        usage: "Tombol dan kontrol; sudut gambar layanan, galeri, dan About.",
      },
      {
        name: "--radius-lg",
        className: "rounded-lg",
        usage: "Panel yang perlu penekanan lebih besar.",
      },
      {
        name: "rounded-full",
        className: "rounded-full",
        usage: "Khusus FloatingWa dan dot pagination testimoni.",
      },
    ] satisfies RadiusToken[],
  },
  layout: {
    title: "Layout",
    description:
      "Section dan Container mengatur ritme serta lebar halaman. SectionHeading memakai label kecil dan judul yang konsisten; deskripsi tersedia untuk halaman yang memerlukannya.",
    tokens: [
      { name: "Section", usage: "py-20 lg:py-24 (80px / 96px)" },
      {
        name: "Container",
        usage: "max-w-6xl · 2xl:max-w-7xl · px-4 sm:px-6 lg:px-8",
      },
      {
        name: "SectionHeading",
        usage: "Kicker kecil di atas judul 32px / 40px.",
      },
    ] satisfies LayoutTokenInfo[],
  },
  buttons: {
    title: "Tombol",
    description:
      "Tombol dan tautan bergaya tombol selalu memakai Button atau buttonStyles() dari components/ui/button.tsx, bukan class buatan sendiri.",
    variants: [
      {
        variant: "primary",
        label: "Primary",
        usage: "Aksi utama. Maksimal satu per layar.",
      },
      {
        variant: "secondary",
        label: "Secondary",
        usage: "Aksi pendukung dengan latar lembut.",
      },
      {
        variant: "outline",
        label: "Outline",
        usage: "Aksi alternatif dengan garis batas.",
      },
      {
        variant: "ghost",
        label: "Ghost",
        usage: "Aksi tersier tanpa latar; hover mengubah warna teks saja.",
      },
      {
        variant: "inverse",
        label: "Inverse",
        usage: "CTA pada foto/hero atau permukaan gelap.",
      },
    ] satisfies ButtonVariantInfo[],
    sizes: [
      { size: "sm", label: "Kecil (sm)", usage: "36px tinggi, teks 14px." },
      { size: "md", label: "Sedang (md)", usage: "40px tinggi, teks 14px." },
      {
        size: "lg",
        label: "Besar (lg)",
        usage: "48px tinggi, teks 16px semibold; untuk Booking.",
      },
    ] satisfies ButtonSizeInfo[],
    linkNote:
      "Tautan yang terlihat seperti tombol memakai buttonStyles(). Link Lihat Semua memakai teks 16px regular dan satu ikon panah.",
  },
  badges: {
    title: "Badge",
    description:
      "Label kecil untuk kategori, promo, atau status. Gunakan varian yang tersedia, bukan warna baru.",
    variants: [
      {
        variant: "neutral",
        label: "Neutral",
        usage: "Kategori dan label umum.",
      },
      {
        variant: "primary",
        label: "Primary",
        usage: "Status atau penawaran utama.",
      },
      {
        variant: "outline",
        label: "Outline",
        usage: "Label ringan di atas latar terang.",
      },
    ] satisfies BadgeVariantInfo[],
  },
  forms: {
    title: "Form",
    description:
      "Input selalu dibungkus Field agar label, hint, error, dan aria-describedby ditangani otomatis. Input, Select, dan Textarea memakai warna background supaya kontras di atas panel muted.",
    name: {
      label: "Nama lengkap",
      placeholder: "Contoh: Siti Rahma",
      hint: "Tulis sesuai kartu identitas.",
    } satisfies FormFieldInfo,
    email: {
      label: "Email",
      placeholder: "nama@email.com",
      error: "Email wajib diisi.",
    } satisfies FormFieldInfo,
    service: {
      label: "Layanan",
      options: [
        "Pilih layanan",
        "Website UMKM",
        "Website Sekolah",
        "Website Kampus",
        "Lainnya",
      ],
    } satisfies SelectFieldInfo,
    message: {
      label: "Pesan",
      placeholder: "Ceritakan kebutuhan Anda.",
    } satisfies FormFieldInfo,
  },
  cards: {
    title: "Card",
    description:
      "Card adalah wadah/panel dasar yang menerima susunan isi sesuai kebutuhan. Komponen Card mengatur permukaan; konten di dalamnya bisa berupa teks, ikon, gambar, detail, atau tombol.",
    contentCard: {
      title: "Variasi Card · ContentCard",
      description:
        "ContentCard adalah susunan Card yang dipakai ulang untuk konten layanan dan profil barber. Komponen ini memakai fondasi gaya Card yang sama; gambar opsional dan area gambar hilang jika tidak diberikan.",
      cardLabel: "Contoh dengan gambar",
    },
    list: {
      title: "List",
      description:
        "List adalah pola mandiri, bukan variasi Card. Item sederhana seperti keunggulan (ul) dan tahapan pengerjaan (ol) cukup ditulis langsung. Buat komponen khusus ketika susunan item yang sama dipakai ulang; contoh di bawah memakai baris informasi dengan border panel saat hover.",
    },
    notesTitle: "Catatan · bukan variasi card",
    notesGroups: ["Token visual", "Komponen lain"] as const,
    components: [
      {
        group: "Token visual",
        name: "shadow-panel",
        usage:
          "Bayangan sangat halus pada kartu dan form; permukaan panel memakai muted agar berbeda dari field.",
      },
      {
        group: "Token visual",
        name: "photo-mono",
        usage: "Treatment grayscale dan kontras untuk foto hero sinematik.",
      },
      {
        group: "Komponen lain",
        name: "GalleryCard",
        usage: "Toggle tampil hanya jika beforeImage pasangan asli tersedia.",
      },
      {
        group: "Komponen lain",
        name: "PageHeader",
        usage:
          "Header halaman dengan kicker, judul, deskripsi, dan breadcrumb.",
      },
      {
        group: "Komponen lain",
        name: "FloatingWa",
        usage: "Tombol WhatsApp hijau berbentuk bulat pada layar mobile.",
      },
    ],
    example: {
      badge: "Promo",
      title: "Judul kartu",
      description:
        "Deskripsi singkat satu atau dua baris tentang item di dalam kartu.",
      action: { label: "Lihat detail", href: "/" },
    } satisfies CardExampleInfo,
  },
  icons: {
    title: "Ikon",
    description:
      "Beberapa paket react-icons tersedia supaya desain tiap project bisa bervariasi: lu (Lucide), tb (Tabler), pi (Phosphor), ri (Remix), hi2 (Heroicons), bs (Bootstrap), dan fa6/si untuk logo brand. Pilih maksimal dua paket UI per project; ikon mewarisi warna teks dan ukurannya diatur dengan utility size-*.",
    sizes: [
      { size: "size-4", usage: "Ikon kecil di dalam teks." },
      { size: "size-5", usage: "Default di dalam tombol dan tautan." },
      { size: "size-6", usage: "Ikon mandiri di kartu." },
      { size: "size-8", usage: "Ikon dekoratif besar." },
    ] satisfies IconSizeInfo[],
    items: [
      { name: "LuPhone", pack: "lu", usage: "Kontak telepon." },
      { name: "LuMapPin", pack: "lu", usage: "Alamat dan lokasi." },
      { name: "TbChefHat", pack: "tb", usage: "Kuliner dan F&B." },
      { name: "PiStorefront", pack: "pi", usage: "Toko dan retail." },
      { name: "RiScissorsLine", pack: "ri", usage: "Fashion dan jasa." },
      { name: "HiMiniSparkles", pack: "hi2", usage: "Aksen dekoratif." },
      { name: "FaWhatsapp", pack: "fa6", usage: "Logo WhatsApp." },
      { name: "FaInstagram", pack: "fa6", usage: "Logo Instagram." },
    ] satisfies IconInfo[],
  },
  motion: {
    title: "Motion",
    description:
      "Animasi dipakai saat brand menuntut (fashion, footwear, portfolio elegan). Satu bahasa gerak per proyek: durasi dan easing yang sama di semua animasi, dan selalu hormati prefers-reduced-motion.",
    durations: [
      { name: "150ms", usage: "Micro-interaction: hover, fokus, tombol." },
      { name: "250ms", usage: "Transisi komponen: dropdown, kartu, tab." },
      {
        name: "400ms",
        usage: "Reveal section dan transisi halaman yang lembut.",
      },
    ] satisfies MotionDurationInfo[],
    easing: {
      name: "ease-smooth",
      usage: "Easing default proyek untuk semua gerakan.",
    },
    demoHint: "Arahkan kursor ke kotak untuk melihat easing.",
  },
};
