const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  link: String,
  tags: [String],
  read: Boolean,
  read_at: Date,
});
const Link = mongoose.model("Link", schema);

module.exports = Link;
