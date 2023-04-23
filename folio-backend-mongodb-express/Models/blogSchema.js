const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  subtitles: [{ type: String }],
  imageUrl: { type: String }

});

module.exports = mongoose.model('Blog', blogSchema);
