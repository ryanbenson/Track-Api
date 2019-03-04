const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: "string",
  due: "date",
});
const Achievement = mongoose.model("Achievement", schema);

module.exports = Achievement;
