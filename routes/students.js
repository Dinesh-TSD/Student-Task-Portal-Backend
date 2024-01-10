const express = require('express')
const { getStudents } = require('../controllers/studentsController');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const router = express.Router();


router.route('/students').get(isAuthenticatedUser,getStudents)

module.exports = router;