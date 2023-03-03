const { Sequelize, Model, DataTypes } = require('Sequelize');

const sequelize = new Sequelize('movies', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
}, {
  freezeTableName: true
});

const Movie = sequelize.define('Movie', {
  title: DataTypes.STRING,
}, {
  freezeTableName: true
});

User.sync();
Movie.sync();

User.hasMany(Movie);
Movie.hasOne(User);

exports.Movie = Movie;
exports.User = User;