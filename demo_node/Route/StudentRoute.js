const express = require('express');
const router = express.Router();
const StudentController = require('../Controllers/StudentController');

router.get('/', StudentController.index);
router.get('/store', StudentController.store);
router.get('/:id/delete',StudentController.delete);

module.exports = router;