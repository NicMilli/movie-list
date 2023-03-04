const router = require('express').Router();
const movieController = require('./controller/movieController');

router.route('/movies')
.get(movieController.getMovies)
.post(movieController.addMovies)
.put(movieController.watchMovie);

module.exports = router;