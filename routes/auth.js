const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
} = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/myprofile").get(isAuthenticatedUser,getUserProfile);

module.exports = router;
 