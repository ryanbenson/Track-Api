require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Task = require('./models/task');
const Achievement = require('./models/achievement');

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/track';

mongoose.connect(dbUrl, {dbName: 'track', useNewUrlParser: true});

app.get('/', async (req, res) => {
  res.json({status: 'Ok'});
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

app.get('/achievements', async (req, res) => {
  const achievements = await Achievement.find({});
  res.json(achievements);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
