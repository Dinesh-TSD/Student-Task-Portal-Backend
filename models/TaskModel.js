const mongoose =require("mongoose")

const taskModel = new mongoose.Schema({
    front:{
        type:String,
        required:[true,"please enter frontend url"],
    },
    back:{
        type:String,
        required:[true,"please enter backend url"],
    },
    studentId:{
        type:String,
    },
    day:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

let model = mongoose.model('Task',taskModel)

module.exports = model;