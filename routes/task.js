const express = require("express");
const { taskCreate, getTasks } = require("../controllers/taskController");
const router = express.Router();


router.route("/task").post(taskCreate);
router.route("/tasks").get(getTasks);



module.exports = router;