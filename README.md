# 📋 Portal Lamaran Kerja

Website sederhana untuk mengumpulkan dan mengelola data lamaran kerja Anda.

## ✨ Fitur

- ✅ **Form Input Lamaran** - Masukkan data perusahaan, posisi, dan status
- ✅ **Tracking Status** - Pantau status lamaran (Dikirim, Diproses, Interview, Diterima, Ditolak)
- ✅ **Penyimpanan Lokal** - Data disimpan di browser Anda (tidak perlu server)
- ✅ **Edit & Hapus** - Ubah atau hapus data lamaran
- ✅ **Statistik Menunggu** - Lihat berapa hari Anda menunggu dari setiap perusahaan
- ✅ **Responsive Design** - Bisa diakses dari desktop dan mobile
- ✅ **Interface Ramah Pengguna** - Desain yang menarik dan mudah digunakan

## 🚀 Cara Menggunakan

### 1. **Clone Repository**
```bash
git clone https://github.com/gandria18-hub/ideal-octo-meme.git
cd ideal-octo-meme
```

### 2. **Buka di Browser**
Cukup buka file `index.html` dengan double-click atau buka dengan browser favorit Anda.

### 3. **Mulai Gunakan**
- Isi form "Tambah Lamaran Baru"
- Pilih status lamaran Anda
- Klik "Simpan Lamaran"
- Lihat semua lamaran Anda di bagian "Daftar Lamaran Saya"

## 📁 Struktur File

```
ideal-octo-meme/
├── index.html      # Struktur HTML
├── style.css       # Styling & Design
├── script.js       # Logika & Fungsi
└── README.md       # File ini
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsif
- **JavaScript Vanilla** - Tanpa framework
- **LocalStorage API** - Penyimpanan data di browser

## 💾 Cara Kerja Penyimpanan Data

Data lamaran Anda disimpan di **LocalStorage browser**. Ini artinya:
- ✅ Data tetap ada meski browser ditutup
- ✅ Tidak perlu server atau database
- ✅ Privasi terjamin (data hanya di komputer Anda)
- ⚠️ Data akan hilang jika cache browser dihapus
- ⚠️ Data hanya tersimpan di browser yang digunakan (tidak di cloud)

## 📊 Input Form

### Field yang Tersedia:
1. **Nama Perusahaan** - Nama perusahaan yang Anda lamar (wajib)
2. **Posisi yang Dilamar** - Jabatan/posisi yang dilamar (wajib)
3. **Tanggal Lamaran** - Kapan Anda mengirim lamaran (wajib)
4. **Status** - Status lamaran saat ini (wajib)
5. **Catatan** - Catatan tambahan atau link lamaran (opsional)
6. **File CV** - Upload file CV Anda (opsional)

### Status Tersedia:
- 🔵 **Sudah Dikirim** - Lamaran baru saja dikirim
- 🟠 **Sedang Diproses** - Pihak HR sedang review
- 🟣 **Interview** - Sudah dapat panggilan interview
- 🟢 **Diterima** - Selamat, Anda diterima!
- 🔴 **Ditolak** - Sayangnya Anda ditolak

## 🎨 Customization

Anda bisa mengubah tampilan dengan:

1. **Ubah warna** - Edit warna di `style.css` (cari `#667eea` atau `#764ba2`)
2. **Ubah font** - Edit font-family di `style.css`
3. **Ubah konten** - Edit teks di `index.html`

## 📱 Responsive

Website ini sudah responsive dan bisa diakses dari:
- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile/Tablet

## 🐛 Troubleshooting

### Data hilang setelah browser ditutup?
- Ini normal karena menggunakan LocalStorage. Data akan tetap ada sampai Anda menghapus cache browser.

### Tidak bisa upload file?
- File CV hanya disimpan nama filenya (fitur ini bisa dikembangkan lebih lanjut dengan server)

### Mau backup data?
- Data disimpan di LocalStorage. Anda bisa export secara manual atau buka DevTools (F12) → Application → LocalStorage

## 🚀 Pengembangan Selanjutnya

Fitur yang bisa ditambahkan ke depannya:
- [ ] Backend server untuk menyimpan data ke database
- [ ] Upload file CV ke cloud
- [ ] Export data ke Excel/PDF
- [ ] Reminder otomatis untuk follow-up
- [ ] Statistik & grafik lamaran
- [ ] Sync data ke cloud (Google Drive, OneDrive)
- [ ] Mobile app version

## 📞 Support

Ada pertanyaan? Hubungi atau buat issue di repository ini!

## 📝 License

Bebas digunakan untuk keperluan pribadi maupun komersial.

---

**Semoga sukses dalam perjalanan karir Anda! 🚀💼**

Dibuat dengan ❤️ oleh gandria18-hub
