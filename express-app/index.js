const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
const welcome = (req,res)=>{
res.send("Bienvenu")
}
  app.get("/" , welcome);
  
  app.get ("/api/movies/:id", (req,res) => {
    const movieId = pareseInt (req, params.id);
    const movie=movie.find((movie) => movie.id ===movieId );

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).send("not found");
    }
  })