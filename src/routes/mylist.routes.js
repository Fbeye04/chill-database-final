import express from "express";
import {
  addToMyList,
  getMyList,
  deleteFromMyList,
} from "../services/mylist.service.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  try {
    const { idSeriesFilm } = req.body;
    const idUser = req.user.id_user;
    const letsAdd = await addToMyList(idUser, idSeriesFilm);

    res.status(201).json({
      message: letsAdd.message,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message:
        "failed to add series/film to my list, something went wrong on the server",
      error: error.message,
    });
  }
});

router.get("/me", verifyToken, async (req, res) => {
  try {
    const idUser = req.user.id_user;
    const yourList = await getMyList(idUser);

    res.status(200).json({
      message: "Successfully display your list",
      data: yourList,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Failed to get your list, something went wrong on the server",
      error: error.message,
    });
  }
});

// terjadi perubahan pembuatan rute delete yang sebelumnya menggunakan req.body namun sekarang user cukup menunjukkan id series film yang nanti digabungkan id user dari verify token. Standar industri tidak membolehkan penggunaan body di delete
router.delete("/:idSeriesFilm", verifyToken, async (req, res) => {
  try {
    const idSeriesFilm = req.params.idSeriesFilm;
    const idUser = req.user.id_user;
    const letsDelete = await deleteFromMyList(idUser, idSeriesFilm);

    res.status(200).json({
      message: letsDelete.message,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message:
        "Failed to remove series/movie from my list. An error occurred on the server.",
      error: error.message,
    });
  }
});

export default router;
