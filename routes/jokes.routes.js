const express = require("express");

const { 
    createNewJokes,
    getAllJokes,
    getOneJokesById,
    updateOneJokesById,
    deleteOneJokesById,
    deleteAllJokes,
    getRandomJokes
} = require("controllers/jokes.controller");

const JokesRouter = express.Router();

//API/JOKESS/
JokesRouter.get("/", getAllJokes);
JokesRouter.get("/:id", getOneJokesById);
JokesRouter.post("/new/", createNewJokes);
JokesRouter.put("/update/:id", updateOneJokesById);
JokesRouter.delete("/delete/:id", deleteOneJokesById);
JokesRouter.delete("/", deleteAllJokes);
JokesRouter.get("/random/", getRandomJokes);

module.exports = JokesRouter;