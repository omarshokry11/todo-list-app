const asyncHandler = require("express-async-handler");
const Task = require("../models/databaseSchima");

exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ data: tasks });
});

exports.createTask = asyncHandler(async (req, res) => {
  const task = req.body;
  const taskToCreate = await Task.create(task);
  res.status(200).json({ msg: "Create successfuly!", data: taskToCreate });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: id },
    { title },
    { new: true }
  );
  res.status(200).json({ msg: "Update successfuly!", data: task });
});

exports.deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  res.status(200).json({ msg: "Deleted successfuly!", data: task });
});
