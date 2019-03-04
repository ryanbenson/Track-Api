const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  date: Date,
  week: String,
  year: String,
  level: String,
});
const Achievement = mongoose.model("Achievement", schema);

module.exports = Achievement;
