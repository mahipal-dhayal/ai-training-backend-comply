const Progress = require('../models/Progress');

exports.getUserProgress = async (req, res) => {
  const userId = req.user.uid;
  let progress = await Progress.findOne({ userId });
  if (!progress) progress = await Progress.create({ userId, completedModules: [] });
  res.json(progress);
};

exports.markComplete = async (req, res) => {
  const userId = req.user.uid; // verified UID
  const { moduleId } = req.body;

  let progress = await Progress.findOne({ userId });
  if (!progress) {
    progress = new Progress({ userId, completedModules: [moduleId] });
  } else if (!progress.completedModules.includes(moduleId)) {
    progress.completedModules.push(moduleId);
  }
  await progress.save();
  res.json(progress);
};

