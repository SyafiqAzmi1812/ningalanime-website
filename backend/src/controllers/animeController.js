import Anime from "../models/Anime.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";

// Memunculkan semua Anime Yagesyaa
export const getAllAnimes = catchAsync(async (req, res) => {
  const animes = await Anime.find();

  return res.status(200).json({
    success: true,
    message: "Anime has been fetched successfully",
    data: animes,
  });
});

// Menambahkan daftar Anime Yagesyaa
export const createAnime = catchAsync(async (req, res) => {
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
    message: "Anime has been added successfully",
    data: anime,
  });
});

// Memunculkan satu Anime Yagesyaa
export const getAnime = catchAsync(async (req, res) => {
  const id = req.params.id;
  const anime = await Anime.findById(id);

  if (!anime) {
    throw new AppError(`Anime with id ${id} not found`, 404);
  }

  return res.status(200).json({
    success: true,
    message: "Anime has been fetched successfully",
    data: anime,
  });
});

// Update Anime Yagesyaa
export const updateAnime = catchAsync(async (req, res) => {
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

  if (!anime) {
    throw new AppError(`Anime with id ${id} not found`, 404);
  }

  return res.status(200).json({
    success: true,
    message: "Anime has been updated successfully",
    data: anime,
  });
});

// Delete Anime Yagesyaa
export const deleteAnime = catchAsync(async (req, res) => {
  const id = req.params.id;
  const anime = await Anime.findByIdAndDelete(id);

  if (!anime) {
    throw new AppError(`Anime with id ${id} not found`, 404);
  }

  return res.status(200).json({
    success: true,
    message: "Anime has been deleted successfully",
    data: anime,
  });
});
