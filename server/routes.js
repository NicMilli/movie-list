const router = require('express').Router();
const movieController = require('./controller/movieController');

router.route('/movies')
.get(movieController.getMovies)
.post(movieController.addMovies);

module.exports = router;