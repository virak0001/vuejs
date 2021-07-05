const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');

router.get('/', UserController.index)
router.post('/store', UserController.store);
router.delete('/:id/delete',UserController.delete);
module.exports = router;