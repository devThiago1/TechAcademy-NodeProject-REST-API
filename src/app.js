const express = require('express');
const app = express();

const index = require('./routes/index');
const SR = require('./routes/studentRoute');
const studentRoute = SR;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/student', studentRoute);

module.exports = app;