import mongoose from "mongoose";
import validator from "validator";

const animeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            enum: ['Romance', 'Fantasy', 'Action', 'Adventure', 'Horor', 'Comedy', 'Shounen', 'Shoujo', 'Seinen'],
            required: true
        },
        release_date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Coming Soon', 'Released', 'On Going', 'Completed', 'Cancelled'],
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Anime = mongoose.model("Anime", animeSchema)

export default Anime;