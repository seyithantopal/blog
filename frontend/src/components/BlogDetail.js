import React, { useState, useContext, useEffect } from 'react';
import { PostContext } from '../PostContext';
import { useHistory } from 'react-router-dom';
import { getJWT } from '../utils';
import './BlogDetail.css';
import axios from 'axios';

const BlogDetail = (match) => {
	const [posts, setPosts] = useContext(PostContext);
	const [post, setPost] = useState({});

	const id = match.match.params.id;
	//const post = posts.find((item) => item.id === parseInt(id));

	useEffect(() => {
		axios
			.get('/api/post/:id', {
				params: { id: id },
			})
			.then((res) => {
				setPost(res.data.results);
			});
	}, []);

	const formatDate = (unformattedDate) => {
		const date = new Date(unformattedDate).toUTCString().split(' ');
		const formattedDate = `${date[1]} ${date[2]}, ${date[3]}`;
		return formattedDate;
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="post">
						<div className="single-image">
							<img src="/images/assets/images.jpg" />
						</div>
						<div className="single">
							<div className="row">
								<div className="col-md-1">
									<img src="/images/users/user.jpg" className="single-avatar" />
								</div>
								<div className="col-md-11 single-info">
									<div className="single-author">{post.author}</div>
									<div className="single-date">{formatDate(post.date)}</div>
								</div>
							</div>
							<div className="single-title">{post.title}</div>
							<div className="single-content">{post.content}</div>
							<div className="single-tags">
								{/*post.tags.map((tag, index) => (
									<div className="tag" key={index}>
										<span>{tag}</span>
									</div>
								))*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
