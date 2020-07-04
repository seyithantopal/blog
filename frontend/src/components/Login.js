import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PasswordField from '../components/PasswordField';
import './Login.css';
import axios from 'axios';
let yup = require('yup');

const Login = (match) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [errors, setErrors] = useState({});
	const history = useHistory();

	// validation
	let schema = yup.object().shape({
		email: yup
			.string()
			.email('Email is not in the right format')
			.required('Email is required'),
		password: yup.string().required('Password is required'),
	});

	let validate = () => {
		schema.validate({ email, password }, { abortEarly: false }).catch((err) => {
			let error = err.inner.reduce((list, error) => {
				if (!list[error.path]) list[error.path] = [];
				list[error.path] = list[error.path].concat(error.errors);
				return list;
			}, {});
			setErrors(error);
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		schema.isValid({ email, password }).then(async (valid) => {
			if (valid) {
				await axios
					.post(
						'/api/auth/login',
						{
							email: email,
							password: password,
						},
						{
							headers: { 'Content-Type': 'application/json' },
						}
					)
					.then((res) => {
						localStorage.setItem('auth', JSON.stringify(res.data));
						console.log(res);
					});
				setErrors({});
				history.push('/blog');
			} else {
				validate();
			}
		});
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 login-box">
					<div className="login">
						<div className="login-logo">
							<img src="/images/assets/logo.png" />
						</div>
						<div className="login-form">
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<div className="icon-text">
										<img
											src="/images/assets/avatar.svg"
											className="username-icon"
										/>
										<input
											type="email"
											className="form-control email"
											placeholder="Enter email"
											onChange={(event) => setEmail(event.target.value)}
										/>
									</div>
									<small className="validationError">
										{errors.email ? errors.email : ''}
									</small>
								</div>
								<div className="form-group">
									<PasswordField
										placeholder="Password"
										handleChange={(event) => setPassword(event.target.value)}
									/>
									<small className="validationError">
										{errors.password ? errors.password : ''}
									</small>
								</div>
								<div className="form-check">
									<input
										className="form-check-input remember-me-check"
										type="checkbox"
										id="rememberMe"
									/>
									<label
										className="form-check-label remember-me-label"
										htmlFor="rememberMe"
									>
										Remember Me
									</label>
								</div>
								<button type="submit" className="login-btn">
									Submit
								</button>
							</form>
							<div className="login-account">
								Don’t have an account? <Link to="/register">Sign Up</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
