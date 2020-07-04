const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required: false,
	},
	content: {
		type: String,
		required: false,
	},
	category: {
		type: String,
		required: false,
	},
	tags: {
		type: Array,
		required: false,
	},
	image: {
		type: String,
		required: false,
	},
	author: {
		type: String,
		required: false,
		default: 'John Doe',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;
