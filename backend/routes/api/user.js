const router = require('express').Router();
const auth = require('../../middleware/auth');
const UserController = require('../../controllers/user');

router.get('/all', UserController.getAllUser);
router.get('/:id', UserController.getUserWithId);

module.exports = router;
