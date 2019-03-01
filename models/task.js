const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: 'string',
  completed: 'boolean',
  due: 'date',
});
const Task = mongoose.model('Task', schema);

module.exports = Task;
