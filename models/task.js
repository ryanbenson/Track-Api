const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  due: Date,
  created_at: Date,
  completed_at: Date,
});
const Task = mongoose.model("Task", schema);

module.exports = Task;
