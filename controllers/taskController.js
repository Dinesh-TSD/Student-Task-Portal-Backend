const catchAsyncError = require("../middlewares/catchAsyncError");
const Task = require("../models/TaskModel")



exports.taskCreate = catchAsyncError(async (req, res, next) => {
  const { front, back, studentId, day,name,description } = req.body;

  const task = await Task.create({
    front,
    back,
    studentId,
    day,
    name,
    description
  })

  res.status(201).json({
        success: true,
        message:"Task submited",
        task
    })
});

exports.getTasks=catchAsyncError(async(req,res)=>{
    const tasks= await Task.find();

    res.status(200).json({
        success:true,
        count:tasks.length,
        tasks
    })
})