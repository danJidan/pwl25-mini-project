const Movie = require('../models/movieModel');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.getAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movies', error: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.getById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movie', error: err.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({ message: 'Movie created', movie });
  } catch (err) {
    res.status(500).json({ message: 'Error creating movie', error: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updated = await Movie.update(req.params.id, req.body);
    res.json({ message: 'Movie updated', updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating movie', error: err.message });
  }
};


exports.deleteMovie = async (req, res) => {
  try {
    await Movie.remove(req.params.id);
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting movie', error: err.message });
  }
};
