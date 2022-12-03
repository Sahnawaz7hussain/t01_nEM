const express = require("express");
const movieRoute = express.Router();
const { MoviesModel } = require("../db");

movieRoute.get("/", async (req, res) => {
  try {
    let count = await MoviesModel.countDocuments();
    let query = req.query;
    let { q, title, rating, _sort, _order, _page, _limit } = query;

    // FILTER.
    let params = {};
    title && (params.title = title);
    rating && (params.rating = rating);
    // SORTING BY RATING
    let sortTing = {}; // {title:1}; // {title:-1} // {rating:1}
    _sort === "rating" &&
      _order &&
      (_order === "asc"
        ? (sortTing.rating = 1)
        : _order === "desc"
        ? (sortTing.rating = -1)
        : 1);
    // PAGINATION.
    let Limit = +_limit || 20;
    let Skip = Limit * (_page - 1);
    let totalPages = Math.ceil(count / Limit);

    let regex = new RegExp(q, "i");
    q && (params.title = regex);

    let movies = await MoviesModel.find(params)
      .sort(sortTing)
      .limit(Limit)
      .skip(Skip);
    let totalResults = movies.length;
    let currentPage = +_page || 1;
    let moviesData = {
      totalPages,
      totalResults,
      currentPage,
      movies,
    };
    res.send(moviesData);
  } catch (err) {
    console.log("failed to get moveis");
    res.send({ err: "something wend wrond" });
  }
});

movieRoute.get("/:movieId", async (req, res) => {
  try {
    let movieId = req.params.movieId;
    const movies = await MoviesModel.find({ _id: movieId });
    res.send(movies);
  } catch (err) {
    console.log("failed to get single movie");
    res.send({ err: "something wend wrond" });
  }
});
movieRoute.post("/", async (req, res) => {
  try {
    let newMovie = req.body;
    //console.log("newMovie;", newMovie);
    //MoviesModel.insertMany(newMovie);
    let movie = new MoviesModel(newMovie);
    await movie.save();
    res.send("Movie added successfully");
  } catch (err) {
    console.log("err Unable to add new movies.");
    res.send("Something went wrong.");
  }
});

movieRoute.patch("/:movieId", async (req, res) => {
  try {
    let { movieId } = req.params;
    let newData = req.body;
    await MoviesModel.findByIdAndUpdate({ _id: movieId }, newData);
    console.log("new data", newData);
    res.send("data will be updated from here");
  } catch (err) {
    console.log("Failed to patch/update the document");
    res.send({ err: "something wend wrond" });
  }
});

movieRoute.delete("/:movieId", async (req, res) => {
  try {
    let { movieId } = req.params;
    console.log("movie id:", movieId);
    await MoviesModel.findByIdAndDelete({ _id: movieId });
    res.send("Movie deleted successfully");
  } catch (err) {
    console.log("unable to delete the item");
    res.send(err.message);
  }
});

module.exports = { movieRoute };
