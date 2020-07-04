const router = require('express').Router();
const auth = require('../../middleware/auth');

const CategoryController = require('../../controllers/category');

router.post('/create', CategoryController.createCategory);
router.get('/all', CategoryController.getAllCategory);
router.put('/update', CategoryController.updateCategory);
router.delete('/delete', CategoryController.deleteCategory);

module.exports = router;
