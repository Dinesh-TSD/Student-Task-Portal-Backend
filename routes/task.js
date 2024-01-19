const express = require("express");
const { taskCreate, getTasks, chartTasks, userList } = require("../controllers/taskController");
const router = express.Router();


router.route("/task").post(taskCreate);
router.route("/tasks").post(getTasks);
router.route("/charttasks").post(chartTasks);
router.route("/userlist").get(userList);





module.exports = router;