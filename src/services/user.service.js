import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import path from "path";

// parameter disini nanti menjadi patokan pemanggilan di rute sehingga req.body harus dibongkar jadi { ..., ..., ...}
export const registerUser = async (fullname, username, email, password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const [result] = await db.query(
    "INSERT INTO user (fullname, username, email, password) VALUES (?, ?, ?, ?)",
    [fullname, username, email, hashedPassword],
  );
  return result.insertId;
};

export const loginUser = async (username, password) => {
  // cuma username karena username lah yang unique dan password di database sudah di-hash jadi tidak akan sama dengan password ketikan sebelum nanti digunakan bcrypt untuk compare
  const [rows] = await db.query("SELECT * FROM user WHERE username = ?", [
    username,
  ]);

  if (rows.length === 0) {
    throw { status: 404, message: "Username not found!" };
  }

  // ini perbandingan password ketikan dengan password hashed di database
  const isMatch = await bcrypt.compare(password, rows[0].password);

  if (!isMatch) {
    throw { status: 401, message: "Wrong password, try again!" };
  }

  // pencetakan token setelah username dan password sudah tepat, penambahan id user juga berguna untuk penggunaan di service lain seperti daftar saya
  const token = jwt.sign(
    {
      id_user: rows[0].id_user,
      username: username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" },
  );

  // ini adalah kode yang memotong agar saat login berhasil, nantinya password yang sudah di hash tidak muncul di pesan berhasilnya untuk menjaga kerahasiaan
  const { password: passwordDB, ...userWithoutPassword } = rows[0];

  return { userWithoutPassword, token };
};

// disini data yang diambil langsung tanpa password sehingga tidak perlu seperti cara di atas namun alasannya karena ...
export const getUserProfile = async (id) => {
  const [rows] = await db.query(
    "SELECT id_user, username, email, foto_profil FROM user WHERE id_user = ?",
    [id],
  );

  if (rows.length === 0) {
    throw { status: 404, message: "User not found!" };
  }

  return rows[0];
};

export const updateUserProfile = async (id, newData) => {
  const [rows] = await db.query("SELECT * FROM user WHERE id_user = ?", [id]);

  if (rows.length === 0) {
    throw { status: 404, message: "User not found!" };
  }

  const oldData = rows[0];

  const finalUsername = newData.username || oldData.username;
  const finalEmail = newData.email || oldData.email;
  const finalPhoto = newData.foto_profil || oldData.foto_profil;

  let finalPassword = oldData.password;

  if (newData.password) {
    const saltRounds = 10;
    finalPassword = await bcrypt.hash(newData.password, saltRounds);
  }

  await db.query(
    "UPDATE user SET username = ?, email = ?, password = ?, foto_profil = ? WHERE id_user = ?",
    [finalUsername, finalEmail, finalPassword, finalPhoto, id],
  );

  // ini adalah kode tambahan untuk mengganti foto profil agar data yang lama tidak menjadi sampah yang tidak digunakan, hal ini karena ini merupakan proyek movie streaming platform dimana foto profil hanya sebagai hiburan dan bukan utama seperti app medsos jadi daripada memenuhi memori lebih baik dihapus dan diganti tiap ada yang baru
  // dan ini nantinya tidak perlu dipasang di route karena ini urusan dapur bukan sesuatu yang perlu disajikan ke user
  if (
    newData.foto_profil &&
    oldData.foto_profil &&
    newData.foto_profil !== oldData.foto_profil
  ) {
    try {
      /* windows itu buta jadi perlu dituliskan alamat lengkap mana file yang mau dihapus,
      path.join yang akan merangkainya, process.cwd akan membaca dimana folder back-end ini berjalan,
      lalu dipilih mana folder tempat file itu berada, dan di akhir ditulis mana file yang dituju (oldData.foto_profil) */
      const oldPhotoPath = path.join(
        process.cwd(),
        "uploads/",
        oldData.foto_profil,
      );
      await fs.unlink(oldPhotoPath); // ini adalah perintah penghapusannya
      console.log(`successful to remove old photo: ${oldData.foto_profil}`);
    } catch (error) {
      console.error(`Failed to remove old photo:, ${error.message}`);
    }
  }

  return { message: "Profile updated successfully" };
};
