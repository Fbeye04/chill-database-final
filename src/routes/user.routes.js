import express from "express";
import {
  registerUser,
  verifyEmail,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../services/user.service.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;

    if (!fullname || !username || !email || !password) {
      return res.status(400).json({
        message:
          "All user data (full name, username, email, and password) must be filled in!",
      });
    }

    const registerIt = await registerUser(fullname, username, email, password);

    res.status(201).json({
      message: "Register success",
      data: {
        id: registerIt,
        fullname: fullname,
        username: username,
        email: email,
      },
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY" && error.message.includes("email")) {
      return res.status(400).json({
        message: "Email already registered. Use another email!",
        error: error.message,
      });
    } else if (
      error.code === "ER_DUP_ENTRY" &&
      error.message.includes("username")
    ) {
      return res.status(400).json({
        message: "Username already registered. Use another username!",
        error: error.message,
      });
    } else {
      return res.status(500).json({
        message: "failed to register, something went wrong on the server",
        error: error.message,
      });
    }
  }
});

router.get("/verify-email", async (req, res) => {
  try {
    const { token } = req.query;
    const letsVerify = await verifyEmail(token);

    res.status(200).json({
      message: letsVerify.message,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Failed to verify, something went wrong on the server",
      error: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password must be filled in!",
      });
    }

    // sebenarnya bisa tanpa destructuring tapi nanti di status berhasil harus nulis ulang seperti letsLogin.userWithoutPassword dan letsLogin.token jadi tidak efisien
    const { userWithoutPassword, token } = await loginUser(username, password);

    res.status(200).json({
      message: "Login successful",
      data: {
        user: userWithoutPassword,
        token: token,
      },
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Failed to login, something went wrong on the server",
      error: error.message,
    });
  }
});

router.get("/profile/me", verifyToken, async (req, res) => {
  try {
    const idUser = req.user.id_user;
    const userProfile = await getUserProfile(idUser);

    res.status(200).json({
      message: "Successfully got user profile",
      user: userProfile,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Failed to get user data, something went wrong on the server",
      error: error.message,
    });
  }
});

// disini walaupun rute edit tapi karena yang diedit adalah data pribadi jadi tidak perlu diambil id dari url karena sudah bisa dibaca dari req.user.id_user yang dibawa dari middleware
router.patch("/profile/me", verifyToken, async (req, res) => {
  try {
    const idUser = req.user.id_user;
    const newProfile = req.body;
    const letsUpdate = await updateUserProfile(idUser, newProfile);

    res.status(200).json({
      message: letsUpdate.message,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "failed to update profile, something went wrong on the server",
      error: error.message,
    });
  }
});

export default router;
