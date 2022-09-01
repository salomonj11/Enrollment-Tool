const router = require('express').Router();
const { student } = require('../../db/models/student');

router.get('/', async (req, res, next) => {
  try {
    const Elstudents = await student.findAll();
    res.send(Elstudents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
