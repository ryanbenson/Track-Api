require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Task = require('./models/task');
const Achievement = require('./models/achievement');

const app = express();
app.use(bodyParser.json());

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

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try{
    await task.save();
    return res.json({message: 'Task saved'});

  } catch (err){
    return res.status(400).json({message: 'Bad input', error: err});
  }
});

app.post('/achievements', async (req, res) => {
  const achievement = new Achievement(req.body);
  try{
    await achievement.save();
    return res.json({message: 'Achievement saved'});

  } catch (err){
    return res.status(400).json({message: 'Bad input', error: err});
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
