const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: String,
  completedModules: [String], // Array of module ids
});

module.exports = mongoose.model('Progress', progressSchema);
