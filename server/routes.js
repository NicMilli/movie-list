const movieController = require('./controller/movieController')

module.exports = {
  getMovies: function(req, res) {
    movieController
  },
  addMovies: function(req, res) {
    res.send('Hi')
  }
}