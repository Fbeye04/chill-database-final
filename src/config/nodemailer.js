import nodemailer from "nodemailer";

// 'Kendaraan pengantar' objek (dalam hal ini email) lewat SMTP ke domain gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // ini alamat tujuan tapi bukan alamat email user melainkan domain gmail-nya itu sendiri
  port: 465, // SSL atau pintu masuk spesifik dari tempat tujuan tersebut
  secure: true, // Wajib bernilai true jika menggunakan port 465 atau sederhananya objek yang diantar sudah wajib terbungkus rapih dan aman dari awal
  // Identitas yang mengirim (dalam hal ini admin dari chill)
  auth: {
    user: process.env.SMTP_EMAIL_USER,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

// intinya ini file konfigurasi yang menghubungkan node.js ke google khusunya gmail

export default transporter;
