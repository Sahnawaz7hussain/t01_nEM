const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/smdbmovies");

const moviesSchema = mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  genre: String,
  year: String,
  actor: String,
  actoress: String,
});

const MoviesModel = mongoose.model("movie", moviesSchema);

module.exports = { connection, MoviesModel };
