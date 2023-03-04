const { Sequelize, Model, DataTypes } = require('Sequelize');
const mysql = require('mysql2');

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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  watched: DataTypes.BOOLEAN
}, {
  freezeTableName: true
});

User.sync();
Movie.sync();

User.hasMany(Movie);
Movie.hasOne(User);

module.exports.Movie = Movie;
module.exports.User = User;
module.exports.sequelize = sequelize;