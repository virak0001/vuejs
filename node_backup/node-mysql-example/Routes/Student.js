const express = require('express');
const router = express.Router();
const StudentController = require('../Controllers/StudentController');

router.get('/',StudentController.index);

module.exports = router;