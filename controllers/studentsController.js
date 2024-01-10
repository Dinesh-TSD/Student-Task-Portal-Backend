const User = require("../models/UserModel");


exports.getStudents = async (req,res,next) =>{

    const users = await User.find()

    res.status(200).json({
        success:true,
        meg:'All Students Route',
        users
    })
}