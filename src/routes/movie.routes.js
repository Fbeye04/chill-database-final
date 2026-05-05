import express from "express";
import {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getMovieDetail,
} from "../services/movie.service.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await getAllMovies();

    res.status(200).json({
      message: "Successfully got all movies",
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get movies, server error",
      error: error.message,
    });
  }
});

// di my list lupa saya tuliskan hal ini: verify token dituliskan di awal karena dia akan difungsikan sebagai penjaga jadi tanpa token, orang tidak mungkin mengakses rute ini
router.post("/", verifyToken, async (req, res) => {
  try {
    const newMovie = req.body;
    const newId = await addMovie(newMovie);

    res.status(201).json({
      message: "movie successfully received and added",
      id: newId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to add the movie, something went wrong on the server",
      error: error.message,
    });
  }
});

// sebelumnya jangan khawatir kenapa endpoint di sini berbeda dengan my list karena ya ini rute movie dan id yang diakses pasti nya movie kecuali kalau ada id lain yang dibutuhkan seperti user barulah id di spesifikkan
router.patch("/:id", verifyToken, async (req, res) => {
  try {
    const idMovie = req.params.id;
    const newMovie = req.body;
    const letsUpdate = await updateMovie(idMovie, newMovie); // jgn kaget, emang ini sesuai sama parameter bukan query

    res.status(200).json({
      message: letsUpdate.message,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({
      message: "failed to update movie, something went wrong on the server",
      error: error.message,
    });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const idMovie = req.params.id;
    const letsDelete = await deleteMovie(idMovie);

    res.status(200).json({
      message: letsDelete.message,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({
      message: "failed to delete movie, something went wrong on the server",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const idMovie = req.params.id;
    const getDetail = await getMovieDetail(idMovie);

    res.status(200).json({
      message: "Successfully got the movie details",
      data: getDetail,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message:
        "Failed to get the movie details. Something went wrong on the server",
      error: error.message,
    });
  }
});

export default router;
