const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const sendToken = require("../utils/jwt");
const { firebaseApp } = require("../library/firebase");

//Register user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});

//Login user email password
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  if (!(await user.isValidPassword(password))) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 201, res);
});

//signin with google
exports.signInWithFirebase = async (req, res) => {
  try {
    const { token } = req.body;
    const decodedToken = await firebaseApp.auth().verifyIdToken(token);
    if (decodedToken.email) {
      res.json({
        status: "ok", 
        message: "sign in success",
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "sign in failed",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "somthing went wrong" });
  }
};

exports.logoutUser = (req, res, next) => {
  req
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      message: "Logged Out",
    });
};
