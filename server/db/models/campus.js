const db = require('../database');
const Sequelize = require('sequelize');

const campuses = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    isEmpty: false,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type: Sequelize.STRING,
    isEmpty: false,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://unsplash.com/photos/d6ebY-faOO0',
  },
});

module.exports = campuses;
