require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Task = require("./models/task");
const Achievement = require("./models/achievement");
const Link = require("./models/link");
const Activity = require("./models/activity");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/track";

mongoose.connect(dbUrl, { dbName: "track", useNewUrlParser: true });

app.get("/", async (req, res) => {
  res.json({ status: "Ok" });
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

app.get("/achievements", async (req, res) => {
  const achievements = await Achievement.find({});
  res.json(achievements);
});

app.get("/links", async (req, res) => {
  const links = await Link.find({});
  res.json(links);
});

app.get("/activities", async (req, res) => {
  const activities = await Activity.find({});
  res.json(activities);
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const newTask = await task.save();
    return res.json({ message: "Task saved", data: newTask });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.post("/achievements", async (req, res) => {
  const achievement = new Achievement(req.body);
  try {
    const newAchievement = await achievement.save();
    return res.json({ message: "Achievement saved", data: newAchievement });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.post("/links", async (req, res) => {
  const link = new Link(req.body);
  try {
    const newLink = await link.save();
    return res.json({ message: "Link saved", data: newLink });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.post("/activities", async (req, res) => {
  const activity = new Activity(req.body);
  try {
    const newActivity = await activity.save();
    return res.json({ message: "Activity saved", data: newActivity });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.put("/tasks", async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.body._id, req.body);
    return res.json({ message: "Task updated", data: updated });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.put("/achievements", async (req, res) => {
  try {
    const updated = await Achievement.findByIdAndUpdate(req.body._id, req.body);
    return res.json({ message: "Achievement updated", data: updated });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.put("/links", async (req, res) => {
  try {
    const updated = await Link.findByIdAndUpdate(req.body._id, req.body);
    return res.json({ message: "Link updated", data: updated });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.put("/activities", async (req, res) => {
  try {
    const updated = await Activity.findByIdAndUpdate(req.body._id, req.body);
    return res.json({ message: "Activity updated", data: updated });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.delete("/tasks", async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete(req.body._id);
    return res.json({ message: "Task deleted", data: deleted });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.delete("/achievements", async (req, res) => {
  try {
    const deleted = await Achievement.findOneAndDelete(req.body._id);
    return res.json({ message: "Achievement deleted", data: deleted });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.delete("/links", async (req, res) => {
  try {
    const deleted = await Link.findOneAndDelete(req.body._id);
    return res.json({ message: "Link deleted", data: deleted });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.delete("/activities", async (req, res) => {
  try {
    const deleted = await Activity.findOneAndDelete(req.body._id);
    return res.json({ message: "Activity deleted", data: deleted });
  } catch (err) {
    return res.status(400).json({ message: "Bad input", error: err });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
