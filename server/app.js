const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();
const studentsRouter = require('./api/routes/students');
const campusesRouter = require('./api/routes/campuses');

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cors());
app.use(volleyball);

//this is where some things should go

app.use('./students', studentsRouter);
app.use('./campuses', campusesRouter);

module.exports = app;
