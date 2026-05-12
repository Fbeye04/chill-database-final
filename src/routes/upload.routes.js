import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/auth.middleware.js";
import upload from "../services/upload.service.js";

const router = express.Router();

// walaupun ada async tapi ini masih kode synchronous, kenapa? karena kita tidak menggunakan await dengan alasan memang tidak menyentuh database
router.post("/", verifyToken, async (req, res) => {
  // kalau upload.single diletakkan di baris atas maka dia akan langsung tereksekusi dan tidak bisa diproses untuk ditangkap error jika ada, dan akan dianggap server error 500
  const uploadProcess = upload.single("photo");

  // karena multer itu middleware function jadi dia tidak akan mengembalikan error secara default makanya perlu instruksi khusus agar saat menemukan kesalahan, dia akan menangkap errornya
  uploadProcess(req, res, function (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({
        message: "Failed to upload (multer error)", // ini error karena
        error: error.message,
      });
    } else if (error) {
      return res.status(400).json({
        message: "Failed to upload file (incorrect format)",
        error: error.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No photos detected",
      });
    }

    res.status(200).json({
      message: "Photo upload successful",
      file: req.file,
    });
  });
});

export default router;
