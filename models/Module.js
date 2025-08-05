const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  videoUrl: String,
  pptUrl: String,
});

module.exports = mongoose.model('Module', moduleSchema);
