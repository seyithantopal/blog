import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Post.css';
import axios from 'axios';
import { getJWT, getToken } from '../utils';
let yup = require('yup');

const Post = (match) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('');

	const [categories, setCategories] = useState([]);

	const handleSelection = (event) => {
		setCategory(event.target.value);
	};

	const getCategories = async () => {
		await axios.get('/api/category/all').then((res) => {
			setCategories(res.data.results);
		});
	};

	useEffect(() => {
		getCategories();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(title, content, category);
		await axios
			.post(
				'/api/post/create',
				{
					title: title,
					content: content,
					category: category,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'x-auth-token': getToken(),
					},
				}
			)
			.then((res) => {
				console.log(res);
			});
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="create-post">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<div className="icon-text">
									<input
										type="text"
										className="form-control"
										placeholder="Title"
										onChange={(event) => setTitle(event.target.value)}
										value={title}
										autoFocus
									/>
								</div>
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									rows="7"
									placeholder="Content"
									onChange={(event) => setContent(event.target.value)}
									value={content}
								></textarea>
							</div>
							<div className="form-group">
								<select
									className="form-control"
									onChange={handleSelection}
									id="exampleFormControlSelect1"
									value={category}
								>
									<option defaultValue>Category</option>
									{categories.map((cat, i) => (
										<option key={i} value={cat.name}>
											{cat.name}
										</option>
									))}
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="post-image-file">Post Image</label>
								<input
									type="file"
									className="form-control-file"
									id="post-image-file"
								/>
							</div>

							<button type="submit" className="create-post-btn">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
