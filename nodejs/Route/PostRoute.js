const express = require('express');
const router = express.Router();
const postController = require('../Controller/PostController');

router.get('/',postController.index);
router.post('/',postController.store);
router.put('/:id',postController.update);
// router.post('/update',studentController.update);
// router.get('/edit/:id',studentController.edit);
// router.get('/:id/delete',studentController.delete);

module.exports = router;