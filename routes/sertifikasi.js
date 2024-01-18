var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('sertifikasi/view_sertifikasi', { title: 'LSP-STMIK BANJARBARU' });
});

router.get('/network', function (req, res, next) {
  const data = {
    title1: 'Network',
    title2: 'Design',
    img: "image-network",
    description: 'Skema Sertifikasi Network Designer ini dimaksudkan untuk memberikan standar kompetensi yang dibutuhkan tenaga kerja bidang Teknologi Informasi dan Komunikasi yang mengacu pada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) kategori informasi dan komunikasi berdasarkan Keputusan Menteri Ketenagakerjaan Republik Indonesia No 321 tahun 2016 .',
    kompetensiInti: [
      'J.611000.001.01 Mengumpulkan Kebutuhan Teknis Pengguna yang Menggunakan Jaringan',
      'J.611000.002.01 Mengumpulkan Data Peralatan Jaringan dengan Teknologi yang Sesuai',
      'J.611000.003.02 Merancang Topologi Jaringan',
      'J.611000.004.01 Merancang Pengalamatan Jaringan',
      'J.611000.006.01 Merancang Keamanan Jaringan',
      'J.611000.007.02 Merancang Pemulihan Jaringan',
      'J.611000.021.02 Mengembangkan Prosedur Pemeliharaan Jaringan',
      'J.611000.024.01 Mengevaluasi Jaringan Komputer untuk Pengembangan Masa Depan',
    ],
    kompetensiPilihan: [
      'J.611000.011.02 Memasang Perangkat Jaringan ke dalam Sistem Jaringan',
      'J.611000.012.02 Mengkonfigurasi Switch pada Jaringan',
      'J.611000.013.02 Mengkonfigurasi Routing pada Perangkat Jaringan Dalam Satu Autonomous System',
      'J.611000.014.02 Mengkonfigurasi Routing pada Perangkat Jaringan Antar Autonomous System',
      'J.611000.015.01 Memonitor Keamanan Jaringan',
      'J.611000.016.02 Mengatasi Serangan pada Jaringan',
      'J.611000.017.01 Mengidentifikasi Sumber Kerusakan',
      'J.611000.018.01 Memperbaiki Kerusakan Konfigurasi Jaringan',
      'J.611000.019.01 Mengganti Perangkat Jaringan yang Rusak',
      'J.611000.020.01 Mengoptimalkan Kinerja Sistem Jaringan',
      'J.611000.022.01 Melakukan Backup dan Restore Konfigurasi Jaringan',
    ],
    apl1: 'https://drive.google.com/file/d/13Yuf6eTvFkFCc4O4o02EUwSKFPHIugp5/view',
    apl2: 'https://drive.google.com/file/d/1PMZXt_Xtym8FV4-8C0mv14cphWOXl-K3/view',
    checklist: 'https://drive.google.com/file/d/1lz6M46OOcsW1Dfw3zbLety-iZ-2Nz_x0/view',
  }
  res.render('sertifikasi/detail', {
    title: 'LSP-STMIK BANJARBARU',
    data,
  });
});

router.get('/programming', function (req, res, next) {
  const data = {
    title1: 'Lead',
    title2: 'Programming',
    img: "image-lead",
    description: 'Skema Sertifikasi Lead Pemrograman ini dimaksudkan untuk memberikan standar kompetensi yang dibutuhkan tenaga kerja bidang Teknologi Informasi dan Komunikasi yang mengacu pada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) kategori informasi dan komunikasi berdasarkan Keputusan Menteri Ketenagakerjaan Republik Indonesia No. 282 tahun 2016.',
    kompetensiInti: [
      'J.620100.001.01 Menganalisis Tools.',
      'J.620100.003.01 Melakukan Identifikasi Library, Komponen atau Framework yang Diperlukan',
      'J.620100.006.01 Merancang User Experience',
      'J.620100.027.01 Mengimplementasikan Network Programming',
      'J.620100.032.01 Menerapkan Code Review',
      'J.620100.038.01 Melaksanakan Pengujian Oleh Pengguna(UAT)',
      'J.620100.039.02 Memberikan Petunjuk Teknis kepada Pelanggan',
      'J.620100.041.01 Melaksanakan Cutover Aplikasi',
      'J.620100.043.01 Menganalisis Dampak Perubahan terhadap Aplikasi',
      'J.620100.044.01 Menerapkan Alert Notification jika Aplikasi Bermasalah',
      'J.620100.045.01 Melakukan Pemantauan Resource yang Digunakan Aplikasi',
      'J.620100.047.01 Melakukan Pembaharuan Perangkat Lunak'
    ],
    kompetensiPilihan: [
      'J.620100.002.01 Menganalisis Skalabilitas Perangkat Lunak',
      'J.620100.008.01 Merancang Arsitektur Aplikasi',
      'J.620100.024.02 Melakukan Migrasi ke Teknologi Baru',
      'J.620100.028.02 Menerapkan Pemrograman Real Time',
      'J.620100.029.02 Menerapkan Pemrograman Paralel',
      'J.620100.030.02 Menerapkan Pemrograman Multimedia',
      'J.620100.036.02 Melaksanakan Pengujian Kode Program secara Statis',
      'J.62090.018.01  Mengelola Risiko Keamanan Informasi',
      'J.62090.011.01  Menerapkan Standar-Standar Keamanan Informasi yang Berlaku'
    ],
    apl1: 'https://drive.google.com/file/d/16yrf5-r4oh5Gb_9FUpPFORwuO2exrwPW/view',
    apl2: 'https://drive.google.com/file/d/1Yau-uo8vMDgQVrWYhBEgiOjDHo_Q06p1/view',
    checklist: 'https://drive.google.com/file/d/1Zwttd5GffXLheCjWp2BzMVk8bgAbYPxI/view'
  }

  res.render('sertifikasi/detail', {
    title: 'LSP-STMIK BANJARBARU',
    data,
  });
});

module.exports = router;









