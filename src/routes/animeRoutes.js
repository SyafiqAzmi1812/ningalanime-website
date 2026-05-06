import express from "express"
import { getAllAnimes, createAnime, getAnime, deleteAnime, updateAnime } from "../controller/animeController"

const router = express.Router();

router.get('/', getAllAnimes),
router.get('/:id', getAnime),
router.post('/', createAnime),
router.put('/:id', updateAnime),
router.delete('/:id', deleteAnime)

export default router;