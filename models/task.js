const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  due: Date,
});
const Task = mongoose.model("Task", schema);

module.exports = Task;
