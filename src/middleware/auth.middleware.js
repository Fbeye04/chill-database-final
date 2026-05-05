import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // dilakukan pengambilan data token JWT untuk memeriksa apakah token dibawa atau tidak? biasanya data tersebut disimpan di http header dengan nama bagiannya authorization
  const authHeader = req.headers["authorization"];

  //   dilakukan pengecekan token sudah dibawah atau tidak
  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied. Token not found!",
    });
  }

  //   token yang sudah dibawah biasanya memiliki format "Bearer ...token" makanya dia dipisahkan dulu antar spasi lalu nilai yang diambil dari indeks 1 yang mana itu token aslinya
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Access denied. Token format is incorrect!",
    });
  }

  //   lalu, itukan token yang dibawa user, nah barulah setelahnya dilakukan pengecekan dengan ACCESS_TOKEN_SECRET dan bila terjadi error maka akan ditangkap langsung oleh catch
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; // data yang dibawa dalam token yang sudah benar tadi disimpan ke dalam req.user yang memudahkan kalau dibutuhkan nantinya
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Token is invalid or expired!",
    });
  }
};
