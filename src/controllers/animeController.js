import Anime from "../models/Anime.js";

// Memunculkan semua Anime Yagesyaa
export const getAllAnimes = async (req, res) => {
  const animes = await Anime.find();

  return res.status(200).json({
    success: true,
    message: "Anime has been fethched successfully, NIGGA",
    data: animes,
  });
};

// Menambahkan daftar Anime Yagesyaa
export const createAnime = async (req, res) => {
  const { title, synopsis, genre, release_date, status } = req.body;
  const anime = await Anime.create({
    title,
    synopsis,
    genre,
    release_date,
    status,
  });

  return res.status(201).json({
    success: true,
    message: "Anime has beed added succesfully. NIGGA!",
    data: anime,
  });
};

// Memunculkan satu Anime Yagesyaa
export const getAnime = async (req, res) => {
  const id = req.params.id;
  const anime = await Anime.findById(id);

  return res.status(200).json({
    success: true,
    message: "Anime has been finded succesfully. NIGGA!",
    data: anime,
  });
};

// Update Anime Yagesyaa
export const updateAnime = async (req, res) => {
  const id = req.params.id;
  const { title, synopsis, genre, release_date, status } = req.body;
  const anime = await Anime.findByIdAndUpdate(
    id,
    {
      title,
      synopsis,
      genre,
      release_date,
      status,
    },
    { returnDocument: "after" },
  );

  return res.status(200).json({
    success: true,
    message: "Anime has been updated succesfully. NIGGA!",
    data: anime,
  });
};

// Delete Anime Yagesyaa
export const deleteAnime = async (req, res) => {
  const id = req.params.id;
  const anime = await Anime.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Anime has been deleted succesfully. NIGGA!",
    data: anime,
  });
};

