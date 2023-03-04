const {Movie, User, sequelize} = require('./index');

const mysql = require('mysql2');

module.exports = {
  addMovies: async function(req, res) {
    //var createdAt = new Date().toJSON().slice(0, 3);
    var createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var updatedAt = createdAt;
    var watched = false;
    try {
      const movies = await sequelize.query('INSERT INTO Movie SET title = ?, watched = ?, createdAt = ?, updatedAt = ?', {
      replacements: [req.body.title, watched, createdAt, updatedAt]
    });
    res.sendStatus(201);
    } catch (e) {
      res.status(404);
      if (e.errors[0].message) {
        res.send(`Error updating the database: ${e.errors[0].message}`);
      } else {
        res.send('Sorry, there was an issue adding to the database')
      }

    }
    // query('SELECT id from User WHERE username = ?', {
    //   replacements: [req.body.];
    // })

  },
  getMovies: async function(req, res) {
    const movies = await sequelize.query('SELECT * from Movie');
    res.json(movies);
  }
};
