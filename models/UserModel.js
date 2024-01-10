const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter your name"]
    },
    email:{
        type: String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter valid email"]
    },
    password:{
        type: String,
        required:[true,"please enter your password"],
        maxLength:[6,"password cannot exceed 6 characters"],
    },
    avatar:{
        type:String,
        // required:true
    },
    role:{
        type:String,
        default:"student"
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date,
    createdAt:{
        type:Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password , 10)
})


userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this.id}, process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_TIME})
}

userSchema.methods.isValidPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

let model = mongoose.model('User',userSchema)

module.exports = model;