const db = require('../database');
const Sequelize = require('sequelize');

const student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    isEmpty: false,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    isEmpty: false,
    allowNull: false,
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0,
    },
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://unsplash.com/photos/hxGP_QuC6yY',
  },
});

module.exports = student;
