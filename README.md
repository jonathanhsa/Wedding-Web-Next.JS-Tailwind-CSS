# Alya & Raka Wedding Invitation

Website undangan pernikahan digital yang dibuat dengan gaya editorial, elegan, dan modern. Desainnya mengambil nuansa warna krem, gold, hitam, dan visual wedding yang lembut, dengan animasi halus supaya halaman terasa hidup saat dibuka.

Project ini cocok untuk undangan nikah online, landing page acara, atau template portfolio frontend berbasis Next.js dan Tailwind CSS.

## Preview

Halaman utama berisi:

- Hero invitation dengan frame besar dan foto wedding
- Musik background dengan tombol play/pause
- Cursor kupu-kupu dengan animated trail di desktop
- Section Our Journey dengan timeline cerita
- Halaman detail perjalanan terpisah di `/journey`
- Event details untuk akad dan resepsi
- RSVP form
- Footer credit pembuat

## Tech Stack

Project ini dibuat menggunakan:

- **Next.js 16**: framework React untuk routing, build, dan rendering
- **React 19**: library UI berbasis component
- **TypeScript**: typing untuk kode yang lebih aman dan rapi
- **Tailwind CSS 4**: styling utility-first
- **CSS Custom Animation**: animasi hero, reveal, hover, cursor kupu-kupu, dan trail
- **Next Font / Geist**: font bawaan dari setup Next.js

## Struktur Project

```text
undangan-nikah/
├─ app/
│  ├─ components/
│  │  ├─ ButterflyCursor.tsx
│  │  └─ WeddingMusic.tsx
│  ├─ journey/
│  │  └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ public/
│  └─ when-god-made-you.mp3
├─ package.json
└─ README.md
```

## Pages

### `/`

Halaman utama undangan pernikahan. Di dalamnya ada hero, story timeline, event details, RSVP, musik, dan footer.

### `/journey`

Halaman tambahan untuk cerita yang lebih panjang. Dibuat terpisah agar halaman utama tetap clean dan tidak terlalu penuh.

## Fitur Utama

### Animated Wedding Hero

Hero section memakai visual wedding dengan frame besar, overlay lembut, teks nama pasangan, tanggal, dan lokasi acara.

### Background Music

Musik disimpan di:

```text
public/when-god-made-you.mp3
```

Komponen musik berada di:

```text
app/components/WeddingMusic.tsx
```

Browser modern bisa memblokir autoplay suara. Karena itu, musik akan mencoba autoplay, lalu tetap bisa diputar lewat tombol play/pause di kanan bawah.

### Butterfly Cursor

Cursor desktop diganti menjadi kupu-kupu dengan trail animasi. Fitur ini otomatis nonaktif di perangkat touch/mobile agar tidak mengganggu pengalaman pengguna.

Komponen:

```text
app/components/ButterflyCursor.tsx
```

### Journey Detail Page

Route `/journey` menampilkan cerita yang lebih panjang dalam bentuk card visual dengan foto, timeline line, highlight label, dan responsive mobile layout.

### Responsive Design

Website sudah dibuat responsive untuk:

- Desktop
- Laptop
- Tablet
- Mobile

## Cara Menjalankan Project

Pastikan Node.js sudah terinstall. Disarankan menggunakan Node.js versi terbaru LTS.

### 1. Masuk ke folder project

```bash
cd undangan-nikah
```

Jika posisi terminal masih di folder induk:

```bash
cd "D:\NGODING BRUTAL\Undangan nikah\undangan-nikah"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Lalu buka:

```text
http://localhost:3000
```

Halaman journey:

```text
http://localhost:3000/journey
```

## Script yang Tersedia

### Development

```bash
npm run dev
```

Menjalankan server lokal untuk development.

### Lint

```bash
npm run lint
```

Mengecek kualitas kode dengan ESLint.

### Production Build

```bash
npm run build
```

Membuat build production dan mengecek error TypeScript/Next.js.

### Start Production

```bash
npm run start
```

Menjalankan hasil build production. Jalankan `npm run build` terlebih dahulu.

## Cara Mengganti Data Undangan

Edit file:

```text
app/page.tsx
```

Bagian yang bisa diganti:

- Nama pasangan
- Tanggal acara
- Lokasi acara
- Cerita perjalanan
- Detail akad/resepsi
- Link RSVP

Untuk halaman cerita tambahan, edit:

```text
app/journey/page.tsx
```

## Cara Mengganti Lagu

Ganti file:

```text
public/when-god-made-you.mp3
```

Pastikan nama file tetap sama, atau ubah path audio di:

```text
app/components/WeddingMusic.tsx
```

## Deployment

Project ini bisa dideploy ke Vercel.

Langkah singkat:

1. Push project ke GitHub
2. Buka Vercel
3. Import repository
4. Framework akan terdeteksi sebagai Next.js
5. Klik Deploy

## Credit

Dibuat oleh:

```text
Jonathan Hamonangan Saragih
Email: saragihjonathan80@gmail.com
Instagram: @jonathans.sa
GitHub: jonathanhsa
```

## License

Project ini dibuat untuk kebutuhan website undangan pernikahan digital dan pembelajaran frontend.
