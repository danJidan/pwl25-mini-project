const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const logger = require('../middleware/logger');
const validate = require('../middleware/validate');

router.use(logger);

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', validate, movieController.updateMovie);
router.delete('/:id', validate, movieController.deleteMovie);

module.exports = router;