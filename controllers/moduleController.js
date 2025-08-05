const Module = require('../models/Module');

exports.getModules = async (req, res) => {
  const modules = await Module.find();
  res.json(modules);
};

exports.createModule = async (req, res) => {
  const newModule = new Module(req.body);
  await newModule.save();
  res.status(201).json(newModule);
};
