const Post = require('../models/postSchema');

exports.getAllPost = (req, res, next) => {
    Post.find()
		.then((categories) => {
			return res.json({ msg: 'Fetch successful', results: categories });
		})
		.catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
}

exports.createPost = (req, res, next) => {
    const { title, content, category, image } = req.body;
	const newPost = new Post(req.body);
	newPost
		.save()
		.then((result) => res.status(201).json({ msg: 'Post created' }))
		.catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
}

exports.getPostWithId = (req, res, next) => {
    const id = req.query.id;
	Post.findById({ _id: id })
		.then((categories) => {
			return res.json({ msg: 'Fetch successful', results: categories });
		})
		.catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
}

exports.updatePost = (req, res, next) => {
    Post.updateOne({ _id: req.body.id }, { $set: req.body }, (err, result) => {
		if (!result.n) res.json({ msg: 'There is no post updated' });
		else res.json({ msg: 'Post updated' });
	});
}

exports.deletePost = (req, res, next) => {
    Post.findOneAndDelete({ _id: req.body.id }, (err, post) => {
		if (!post) {
			res.json({ msg: 'There is no post deleted' });
		} else {
			res.json({ msg: 'Post deleted' });
		}
	});
}