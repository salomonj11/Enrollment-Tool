// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Student = require('./models/student');
const Campus = require('./models/campus');
const seed = require('./seed');

Campus.hasMany(Student);
Student.belongsTo(Campus);

const syncAndSeed = async () => {
  await db.sync({ force: true });
  seed();
};

module.exports = {
  db,
  syncAndSeed,
  Student,
  Campus,
};
