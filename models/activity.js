const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  type: String,
  action: String,
  notes: String,
  date: String,
});
const Activity = mongoose.model("Activity", schema);

module.exports = Activity;
