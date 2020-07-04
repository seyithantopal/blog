const router = require('express').Router();
const auth = require('../../middleware/auth');

const PostController = require('../../controllers/post');

router.post('/create', auth, PostController.createPost);
router.get('/all', PostController.getAllPost);
router.get('/:id', PostController.getPostWithId);
router.put('/update', auth, PostController.updatePost);
router.delete('/delete', auth, PostController.deletePost);

module.exports = router;
