const router = require('express').Router();
const { Student } = require('../../db').models;

router.get('/', async (req, res, next) => {
  try {
    const Elstudents = await Student.findAll();
    res.json(Elstudents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
