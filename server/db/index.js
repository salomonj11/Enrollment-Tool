// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Student = require('./models/student');
const Campus = require('./models/campus');
const campusSeed = require('./campusSeed.json');
const studentSeed = require('./studentSeed.json');

Campus.hasMany(Student);
Student.belongsTo(Campus);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  //use this area to sync your database

  await Promise.all(
    campusSeed.map((campus) => {
      return Campus.create(campus);
    })
  );

  await Promise.all(
    studentSeed.map((student) => {
      return Student.create(student);
    })
  );

  console.log(`
    Seeding successful!
  `);
};
module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  models: {
    Student,
    Campus,
  },
};
