const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');

router.get('/', UserController.index)

module.exports = router;