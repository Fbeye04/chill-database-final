import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./src/config/db.js";
import movieRoutes from "./src/routes/movie.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import mylistRoutes from "./src/routes/mylist.routes.js";
import episodeRoutes from "./src/routes/episode.routes.js";
import uploadRoutes from "./src/routes/upload.routes.js";

const app = express();
const port = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "uploads/")));

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/mylist", mylistRoutes);
app.use("/api/episodes", episodeRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
