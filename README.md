# Portfolio Puderta Sinulingga

Website portfolio pribadi yang menampilkan profil, keahlian, proyek, pengalaman, penelitian, layanan, sertifikat, dan informasi kontak.

## Teknologi

- React
- TypeScript
- Vite
- Tailwind CSS

## Fitur

- Navigasi ke berbagai bagian portfolio
- Bagian profil, keahlian, proyek, pengalaman, dan penelitian
- Pratinjau sertifikat PDF
- Formulir kontak menggunakan FormSubmit
- Tampilan responsif

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang. Dari direktori proyek, jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal di terminal. Buka alamat tersebut di browser untuk melihat website.

## Build untuk produksi

```bash
npm run build
```

Untuk menjalankan hasil build secara lokal:

```bash
npm run preview
```

Sesuaikan URL PDF pada data sertifikat di komponen `src/components/Certificates.tsx` agar cocok dengan nama dan lokasi file.

## Formulir kontak

Formulir kontak menggunakan FormSubmit. Pastikan alamat email penerima pada `src/components/Contact.tsx` benar dan sudah diaktifkan melalui tautan konfirmasi dari FormSubmit.

## Deploy ke Vercel

Hubungkan repository Git ke Vercel, lalu deploy. Jika menggunakan npm, pastikan `package-lock.json` tersimpan di repository dan pengaturan **Install Command** di Vercel menggunakan `npm install`. Periksa juga log build jika deployment gagal.
