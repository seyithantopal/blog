const Category = require('../models/categorySchema');

exports.createCategory = (req, res, next) => {
    const { name } = req.body;
	const newCategory = new Category({ name: name });
	newCategory
		.save()
		.then((result) => res.status(201).json({ msg: 'Category created' }))
		.catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
}

exports.getAllCategory = (req, res, next) => {
    Category.find()
		.then((categories) => {
			return res.json({ msg: 'Fetch successful', results: categories });
		})
		.catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
}

exports.updateCategory = (req, res, next) => {
    Category.updateOne({ _id: req.body.id }, { $set: req.body }, (err, post) => {
		if (!post) res.json({ msg: 'There is no category updated' });
		else res.json({ msg: 'Category updated' });
	});
}

exports.deleteCategory = (req, res, next) => {
    Category.findOneAndDelete({ _id: req.body.id }, (err, post) => {
		if (!post) {
			res.json({ msg: 'There is no category deleted' });
		} else {
			res.json({ msg: 'Category deleted' });
		}
	});
}