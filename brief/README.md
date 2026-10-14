# Brief Kategori — Tokigo Starter

**Panduan internal Tokigo** — file ini bukan untuk freelancer. Setiap folder brief sudah self-contained:

- `brief.md` — kebutuhan & aturan: halaman wajib, section, fitur, data, SEO. Sengaja **tidak mengunci desain** supaya tidak bertentangan dengan gambar referensi.
- Gambar referensi desain (di root folder template) = **sumber utama arah visual**.

Cukup serahkan **satu folder** `brief/<folder>/` ke freelancer.

## Struktur

```
brief/
  <kategori>-template-1/
    brief.md              ← kebutuhan: halaman, section, fitur, aturan, data, SEO
    <gambar referensi>    ← taruh gambar referensi langsung di folder ini (root)
  <kategori>-template-2/   (dan -template-3 untuk kategori dengan 3 template)
```

- **34 slot untuk 33 peserta** (1 cadangan): 1 kategori ×3 template, 8 kategori ×2 template, 15 kategori ×1 template.
- Perbedaan visual antar template datang dari **gambar referensi** yang Anda taruh di masing-masing folder — bukan dari `brief.md`.
- Jumlah template per kategori bisa disesuaikan kapan saja: tambah folder `-template-3` untuk menaikkan, atau kurangi bila peminatnya sedikit.

## Referensi visual

- Taruh gambar referensi utama langsung di root folder template (mis. `original-*.webp` atau nama bebas). Boleh beberapa file.
- Freelancer mengikuti nuansa, tipografi, palet, dan komposisi referensi — tetapi tidak menyalin aset/teks mentah dan tidak hotlink gambar.
- Jika gambar referensi belum ada, freelancer/agent **wajib mengajukan design brief singkat** (hero, tipografi, palet, ritme, signature detail) dan menunggu konfirmasi sebelum menulis kode.
- Aturan tampilan tetap dari `AGENTS.md` (anti AI-slop, font maks 2 keluarga, gradient/glass seperlunya, motion, light & dark mode).

## Cara pakai

1. Taruh gambar referensi di root folder template.
2. Serahkan folder tersebut + akses repo (starter + `AGENTS.md`) ke peserta.
3. Untuk pengerjaan dengan AI agent, pakai prompt di bawah.

```
# TASK — Website [NAMA BRAND] ([KATEGORI] — Template [N])

Bangun dengan Tokigo starter. Patuhi AGENTS.md (aturan teknis) dan
brief/<folder>/brief.md (kebutuhan halaman/section/fitur).

Arah visual:
- Ikuti gambar referensi di brief/<folder>/ sebagai sumber utama desain.
- Jika folder referensi kosong, ajukan design brief singkat dulu
  (hero, tipografi, palet, ritme, signature detail) dan tunggu "lanjut".

Data bisnis:
- Nama: [NAMA] · Kota: [KOTA] · WA: [08xx] · Jam operasional: [JAM]
- Alamat/Maps: [ALAMAT atau "belum ada"]
- Keunggulan: [3 poin]
- Harga: [daftar/rentang, atau "belum tersedia"]

Alur:
1) Fase 1: sitemap + daftar section per halaman (termasuk semua Halaman wajib
   di brief). Tunggu saya bilang "lanjut".
2) Fase 2: implementasi penuh. Semua kartu yang tampak bisa diklik harus menuju
   halaman detail yang benar-benar dibuat (generateStaticParams dari content/),
   dilarang href="#", link mati, atau kartu tanpa halaman tujuan.
   Dark mode memakai ThemeToggle + token .dark (sudah tersedia di starter).
3) Jangan verifikasi visual via browser/screenshot. Jalankan
   pnpm typecheck && pnpm lint && pnpm format:check && pnpm build,
   lalu laporkan route yang perlu dicek manusia (375/768/1280/1600px+, light & dark).
```

## Daftar kategori (34 slot)

| Kategori                           | Template | Folder                                       |
| ---------------------------------- | -------- | -------------------------------------------- |
| Sekolah & Universitas              | 3        | `sekolah-universitas-template-{1,2,3}`       |
| Restaurant, Cafe & Warung Makan    | 2        | `restoran-cafe-warung-template-{1,2}`        |
| Toko Retail & Fashion              | 2        | `toko-retail-fashion-template-{1,2}`         |
| Barbershop, Salon & Kecantikan     | 2        | `barbershop-salon-kecantikan-template-{1,2}` |
| Hotel, Villa & Penginapan          | 2        | `hotel-villa-penginapan-template-{1,2}`      |
| Travel & Paket Wisata              | 2        | `travel-paket-wisata-template-{1,2}`         |
| Bimbel & Kursus                    | 2        | `bimbel-kursus-template-{1,2}`               |
| Klinik & Praktik Dokter            | 2        | `klinik-praktik-dokter-template-{1,2}`       |
| Company Profile                    | 2        | `company-profile-template-{1,2}`             |
| Bengkel Motor & Mobil              | 1        | `bengkel-motor-mobil-template-1`             |
| Catering & Prasmanan               | 1        | `catering-prasmanan-template-1`              |
| Laundry & Cuci Sepatu              | 1        | `laundry-cuci-sepatu-template-1`             |
| Kos-kosan & Kontrakan              | 1        | `kos-kosan-kontrakan-template-1`             |
| Rental Kendaraan & Peralatan       | 1        | `rental-kendaraan-peralatan-template-1`      |
| Fotografi & Videografi             | 1        | `fotografi-videografi-template-1`            |
| Agen Properti & Perumahan          | 1        | `agen-properti-perumahan-template-1`         |
| Komunitas & Yayasan                | 1        | `komunitas-yayasan-template-1`               |
| Mebel & Furnitur                   | 1        | `mebel-furnitur-template-1`                  |
| PAUD, Daycare & Taman Bermain      | 1        | `paud-daycare-template-1`                    |
| Gym & Studio Fitness / Yoga        | 1        | `gym-fitness-yoga-template-1`                |
| Perusahaan Konstruksi & Kontraktor | 1        | `perusahaan-konstruksi-template-1`           |
| Travel Umroh & Haji                | 1        | `travel-umroh-haji-template-1`               |
| Wedding Organizer & Dekorasi       | 1        | `wedding-organizer-dekorasi-template-1`      |
| Percetakan & Digital Printing      | 1        | `percetakan-digital-printing-template-1`     |

Kategori 1 template (Bengkel, Catering, Laundry, Kos, Rental, Fotografi, Agen Properti, Komunitas, Mebel, PAUD, Gym, Konstruksi, Umroh & Haji, Wedding, Percetakan) cukup 1 dulu; naikkan ke 2–3 bila peminatnya ternyata tinggi.

## Halaman wajib vs opsional

Setiap brief mencantumkan **Halaman wajib** — route yang harus benar-benar dibuat (bukan hanya section di homepage). Item yang ditandai opsional boleh menjadi section di halaman lain. Aturan kerasnya: setiap kartu/tombol yang tampak bisa diklik wajib menuju halaman yang benar-benar ada — dilarang `href="#"` atau link mati.

## Baseline semua kategori

Dari `AGENTS.md`: navbar (maks 5 menu, CTA WhatsApp, ThemeToggle), hero, tentang + keunggulan (min 3 poin), produk/layanan, galeri, testimoni, FAQ, kontak + Maps, footer, CTA WhatsApp, responsive 375–1600px+, light/dark mode.
