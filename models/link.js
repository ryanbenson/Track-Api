const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: 'string',
  link: 'string',
  tags: ['string'],
  read: Boolean,
});
const Link = mongoose.model('Link', schema);

module.exports = Link;
