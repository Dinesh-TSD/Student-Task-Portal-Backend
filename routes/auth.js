const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  signInWithFirebase,
} = require("../controllers/authController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/sign-in-with-google").post(signInWithFirebase);

module.exports = router;
