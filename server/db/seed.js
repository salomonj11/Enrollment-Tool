const db = require('./database');
const Student = require('./models/student');
const Campus = require('./models/campus');

const seed = async () => {
  // CAMPUSES

  await Campus.create({
    name: 'Pixar Academy',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Pixaranimationstudios.jpg',
    address: '1200 Park Ave, Emeryville, CA 94608',
    description:
      'Pixar Animation Studios, commonly known as simply Pixar, is an American computer animation studio known for its critically and commercially successful computer animated feature films',
  });

  await Campus.create({
    name: 'Disney Academy',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Walt_Disney_Studios_Alameda_Entrance.jpg',
    address: '500 S Buena Vista St, Burbank, CA 91521',
    description:
      'The Walt Disney Company, commonly known as Disney, is an American multinational mass media and entertainment conglomerate headquartered at the Walt Disney Studios complex in Burbank, California.',
  });

  // STUDENTS

  await Student.create({
    firstName: 'Pumba',
    lastName: 'Warthog',
    email: 'Pumba@disney.com',
    imageUrl:
      'https://featuredanimation.com/wp-content/uploads/2022/02/Pumba-Disney-Plus-Icon.jpg.webp',
    gpa: 1.2,
    campusId: 2,
  });

  await Student.create({
    firstName: 'Lightning',
    lastName: 'McQueen',
    email: 'lighting_mcqueen@fast.com',
    imageUrl:
      'https://featuredanimation.com/wp-content/uploads/2022/02/Lightning-McQueen-Disney-Plus-Icon.jpg.webp',
    gpa: 3.9,
    campusId: 2,
  });

  await Student.create({
    firstName: 'Buzz',
    lastName: 'Lightyear',
    email: 'space_is_awesome@buzz.com',
    imageUrl:
      'https://featuredanimation.com/wp-content/uploads/2022/02/Buzz-Lightyear-Disney-Plus-Icon.jpg.webp',
    gpa: 3.99,
    campusId: 1,
  });

  console.log(`
        Seeding successful!
      `);
};

module.exports = seed;
