# Koriko Library (versi statis)

Sistem perpustakaan (OPAC, peminjaman, keanggotaan, laporan) yang dikonversi dari PHP + MySQL menjadi HTML + JavaScript murni. Berjalan di GitHub Pages tanpa server.

## Cara pakai
Buka `index.html`. Data awal berasal dari `proyek_perpustakaan-3.sql` dan disimpan di `localStorage` browser, jadi perubahan hanya terlihat di browser yang sama. Tautan "Reset data demo" di halaman login mengembalikan data awal.

## Catatan
- Password disimpan sebagai hash SHA-256 di `js/app.js`. Ini bukan keamanan sungguhan: seluruh data dan logika login terbaca di sisi klien. Jangan dipakai untuk data nyata.
- Upload cover diubah menjadi gambar kecil yang disimpan di browser. Upload PDF tidak tersedia; letakkan PDF di `files/` secara manual.
- E-book `BK-004` (52 MB) tidak disertakan karena melebihi batas GitHub.
- `kode-sumber/` berisi kode PHP dan SQL asli dalam bentuk halaman HTML untuk dibaca.

## Halaman
`index`, `login_admin`, `login_pemustaka`, `logout`, `opac`, `detail_buku`, `dashboard`, `dashboard_user`, `bibliografi`, `keanggotaan`, `sirkulasi`, `laporan`, `ganti_password`, `tambah_admin`, `cetak_kartu`, `cetak_katalog`, `cetak_label`, `info-cards`.
