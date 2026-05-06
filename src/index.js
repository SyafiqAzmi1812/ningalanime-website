import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"
import animeRoutes from "./routes/animeRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());

app.use("/api/v1/anime", animeRoutes)

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
});