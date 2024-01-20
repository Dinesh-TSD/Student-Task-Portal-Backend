const catchAsyncError = require("../middlewares/catchAsyncError");
const Task = require("../models/TaskModel");
const User =require("../models/UserModel")

exports.taskCreate = catchAsyncError(async (req, res, next) => {
  const { front, back, studentId, day, name, description } = req.body;

  const task = await Task.create({
    front,
    back,
    studentId,
    day,
    name,
    description,
  });

  res.status(201).json({
    success: true,
    message: "Task submited",
    task,
  });
});

exports.getTasks = catchAsyncError(async (req, res) => {
  try {
    const { userId } = req.body;
    const tasks = await Task.find({ studentId: userId });
    res.status(200).json({
      success: true,
      count: tasks.length,  
      tasks,
    });
  } catch (error) {
    console.log(error); 
  }
});

exports.chartTasks = catchAsyncError(async (req, res) => {
  try {
    const { userId } = req.body;
    const tasks = await Task.find({ studentId: userId });
    res.status(200).json({
      success: true,
      count: tasks.length,  
      tasks,
    });
  } catch (error) {
    console.log(error); 
  }
});

exports.userList = catchAsyncError(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,  
      users,
    });
  } catch (error) {
    console.log(error); 
  }
});

