# Tokigo Starter

Starter untuk membangun website klien Tokigo (mayoritas landing page) dengan Next.js + Tailwind CSS. Setiap project baru dimulai dari repo ini, lalu tema dan kontennya diganti sesuai brand klien.

Repo ini dibuat untuk dikerjakan AI agent. **Aturan lengkap ada di [AGENTS.md](./AGENTS.md)** — baca dulu sebelum menulis kode.

## Stack

| Layer           | Pilihan                                       |
| --------------- | --------------------------------------------- |
| Framework       | Next.js 16 (App Router, Turbopack) + React 19 |
| Styling         | Tailwind CSS v4 (CSS-first, `@theme`)         |
| Bahasa          | TypeScript strict                             |
| Package manager | pnpm                                          |
| Ikon            | `react-icons` (impor per subpath)             |
| Util kelas      | `cn()` (clsx + tailwind-merge)                |

## Menjalankan

```bash
pnpm install
pnpm dev
```

- `/` — contoh halaman home (diganti per project).
- `/design-system` — referensi hidup semua token dan komponen (internal, `noindex`).

## Struktur folder

```
app/                     routes (home + design-system)
components/ui/           primitives: button, badge, card, input, field, select, textarea, container
components/layouts/      section, skip-link (+ navbar/footer per project)
components/pages/<page>/ section per halaman
content/                 site.ts (identitas) + copy per halaman
lib/                     utils (cn), links, seo
styles/                  globals.css (entry) + theme.css (token)
public/                  aset statis (gambar, dll)
```

## Memulai project baru

Direkomendasikan lewat template repository:

```bash
gh repo create tokigo-id/nama-klien --private --template tokigo-id/starter
gh repo clone tokigo-id/nama-klien
cd nama-klien
pnpm install
```

Alternatif tanpa GitHub CLI: di halaman repo GitHub pilih **Use this template** → **Create a new repository**, lalu clone. Bisa juga **Download ZIP**, tapi harus `git init` sendiri karena ZIP tidak membawa history git.

## Checklist kustomisasi

1. Ganti nilai token brand di `styles/theme.css` (`--primary`, `--radius`, dll).
2. Isi identitas di `content/site.ts` (nama, tagline, WhatsApp, alamat, sosial).
3. Pilih font lewat `next/font` di `app/layout.tsx`, map ke token `--font-sans`, lalu perbarui blok font di `/design-system`.
4. Tulis copy project di `content/<halaman>.ts`, ganti `app/page.tsx`, dan tambah halaman dengan pola: route di `app/`, section di `components/pages/<halaman>/`, copy di `content/`.
5. Daftarkan setiap token, komponen, atau varian baru di `/design-system` pada perubahan yang sama.

## Deploy ke Cloudflare

Sebelum deploy pertama, rename worker sesuai slug project — nama worker harus unik per akun Cloudflare:

- `wrangler.jsonc` → `"name"`: misal `tokigo-nama-klien` (jangan tinggalkan nama starter).
- `package.json` → `"name"`: pakai slug yang sama.
- Pastikan `pnpm build` lolos dan validasi dengan dry run sebelum deploy asli.

Detail lengkap ada di AGENTS.md section 17.

## Perintah

```bash
pnpm dev          # development
pnpm build        # build produksi
pnpm start        # jalankan hasil build
pnpm lint         # ESLint
pnpm typecheck    # cek TypeScript
pnpm format       # rapikan kode (Prettier)
pnpm format:check # cek format
```

## Aturan penting (ringkas)

- Server Component default; `"use client"` hanya untuk interaksi.
- Light & dark mode wajib: nilai gelap di blok `.dark` (`styles/theme.css`), toggle `ThemeToggle` dipasang di header atau footer.
- Setiap project wajib punya arah desain sendiri (hero, tipografi, palet, ritme) — jangan pakai kerangka layout yang sama untuk semua klien.
- Desain wajib responsif 375px–1600px+. CTA WhatsApp di mobile jadi tombol melayang di pojok, bukan dijejalkan di header.
- Menu header maksimal 5; lebih dari itu pakai dropdown atau halaman terpisah.
- Semua copy user-facing di `content/`; komponen menerima lewat props.
- Warna hanya dari token di `styles/theme.css`; tidak ada hex di komponen.
- Form selalu lewat `Field` + `Input`/`Textarea`/`Select`.
- Gambar wajib `next/image` + `alt`; foto stok diunduh ke `public/` (jangan hotlink).
- Tidak ada efek dekoratif tanpa alasan (gradient, glass, blur) — lihat AGENTS.md section 8.
- Animasi boleh untuk brand yang menuntut (fashion, footwear, portfolio): satu bahasa gerak, durasi pendek, dan selalu hormati `prefers-reduced-motion`.
- Full-image background (hero cover, gallery, kartu gambar) boleh untuk tema yang cocok (hotel, resort, fashion, F&B); gambar tetap diunduh ke `public/` + `next/image`, dan teks di atas gambar wajib terbaca lewat scrim tipis.
- Agent tidak mengecek tampilan lewat browser/screenshot — verifikasi visual dilakukan langsung oleh developer.

## Sebelum selesai

```bash
pnpm typecheck && pnpm lint && pnpm format:check && pnpm build
```

Definition of Done lengkap ada di [AGENTS.md](./AGENTS.md) section 18.
