const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  link: String,
  tags: [String],
  read: Boolean,
});
const Link = mongoose.model("Link", schema);

module.exports = Link;
