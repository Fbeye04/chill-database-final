import multer from "multer"; // multer itu middleware function jadi ketika dia menemukan kesalahan dia langsung bertindak seperti satpam
import path from "path";

const storage = multer.diskStorage({
  // tempat penentuan tujuan folder
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  //   tempat merakit nama baru file
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    // mengambil ekstensi asli supaya file bisa diakses lagi
    const ext = path.extname(file.originalname);

    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({
  storage: storage,

  limits: {
    fileSize: 2 * 1024 * 1024, // itu limitnya 2 mb, 1 mb = 1024 kb, 1 kb = 1024 bytes
  },

  // memfilter pengiriman file sudah sesuai format atau belum
  fileFilter: function (req, file, cb) {
    // tipe-tipe yang diperbolehkan
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    // mimetype itu fungsi pengecekan untuk format file yang digunakan lalu setelah diketahui tipe filenya maka dicek lagi apakah termasuk di tipe yang diperboleh dari allowedTypes
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Rejected: only image formats (JPG/PNG/WEBP) are allowed!"),
        false,
      );
    }
  },
});

export default upload;
