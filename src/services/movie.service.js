import db from "../config/db.js";

export const getAllMovies = async (search, tipe, rating, sort) => {
  let queryText = "SELECT * FROM series_film";
  // conditions itu adalah array berisi query tambahan yang nanti ditambahkan dibelakang queryText tadi
  const conditions = [];
  // values itu yang nilainya yang biasanya ditulis di belakang query seperti ("...", [movieData])
  const values = [];

  if (search) {
    conditions.push("judul LIKE ?");
    /* Intinya kalau % didepan search (%search) dia akan value dari search yang mirip di belakang misal Batman maka (%search adalah nantinya mencari The Batman, lego batman), 
    kalau (search%) akan mencari (Batman begins, batman the movie), kalau (%search%) akan mencari yang di dua kondisi itu (The batman, Batman begins) */
    values.push("%" + search + "%");
  }

  if (tipe) {
    conditions.push("tipe_tayangan = ?");
    values.push(tipe);
  }

  if (rating) {
    conditions.push("rating_umur = ?");
    values.push(rating);
  }

  if (conditions.length > 0) {
    queryText += " WHERE " + conditions.join(" AND "); // bentuk tulisan query kondisi ini akan seperti ini: "SELECT * FROM series_film WHERE judul LIKE ? AND tipe_tayangan = ?"
  }

  if (sort === "terbaru") {
    queryText += " ORDER BY tahun_rilis DESC";
  } else if (sort === "terlama") {
    queryText += " ORDER BY tahun_rilis ASC";
  }

  const [rows] = await db.query(queryText, values); // bentuk tulisan query kondisi ini akan seperti ini: "SELECT * FROM series_film WHERE judul LIKE ? AND tipe_tayangan = ? ORDER BY tahun_rilis DESC"

  return rows;
};

export const addMovie = async (movieData) => {
  const [result] = await db.query("INSERT INTO series_film SET ?", [movieData]);

  return result.insertId;
};

export const updateMovie = async (id, newData) => {
  const [result] = await db.query(
    // urutan baku query sql: UPDATE [nama_tabel] SET [data_yang_diubah] WHERE [kondisi_target]
    "UPDATE series_film SET ? WHERE id_seriesfilm = ?",
    [newData, id], // walaupun di parameter id duluan tapi di query harus sesuai dengan urutan query
  );

  // kenapa tidak menggunakan length? karena memang hasilnya bukan array, ini perintah ke database langsung melainkan objek laporan
  if (result.affectedRows === 0) {
    throw { status: 404, message: "Movie not found to update!" };
  }

  return { message: "Movie updated successfully" };
};

export const deleteMovie = async (id) => {
  const [result] = await db.query(
    "DELETE FROM series_film WHERE id_seriesfilm = ?",
    [id],
  );

  if (result.affectedRows === 0) {
    throw { status: 404, message: "Movie not found to delete!" };
  }

  return { message: "Movie deleted successfully" };
};

export const getMovieDetail = async (id) => {
  // ini akan mengambil semua data dari movie yang terpilih berdasarkan id (kalau lupa, coba lihat apa saja isinya di tabel database)
  const [masterRows] = await db.query(
    "SELECT * FROM series_film WHERE id_seriesfilm = ?",
    [id],
  );

  // kalau movie yang terpilih berdasarkan id itu tidak ada di dalam tabel maka akan dilemparkan error karena dia ghoib
  if (masterRows.length === 0) {
    throw {
      status: 404,
      message: "Series/film is not found",
    };
  }

  // barulah disini dari id movie tadi, diambil isi data episode/movie dari id tersebut (bisa lihat apa saja data yang ada di database)
  const [episodeRows] = await db.query(
    "SELECT * FROM episode_movie WHERE id_seriesfilm = ? ORDER BY urutan_episode ASC",
    [id],
  );

  // mengeluarkan data movie tadi dari array nya sehingga tersisa objek saja
  const movieData = masterRows[0];
  // baru lah disini data episode rows itu digabungkan sebagai bagian dari objek movie data tadi dengan nama episodes
  movieData.episodes = episodeRows;

  // makanya disini itu yang dipanggil lagi adalah movie data karena sudah menampung semuanya
  return movieData;
};
