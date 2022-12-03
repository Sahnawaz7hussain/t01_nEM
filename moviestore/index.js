const express = require("express");
const { connection, MoviesModel } = require("./db");
const { movieRoute } = require("./routes/movieRoute");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});
app.use("/movies", movieRoute);

app.listen(7788, async () => {
  try {
    await connection;
    console.log("Database connected");
    console.log("server is running at http://localhost:7788");
  } catch (err) {
    console.log("Failed to connecting with Database");
    console.log(err);
  }
});
