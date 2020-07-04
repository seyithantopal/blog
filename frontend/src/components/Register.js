import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Register.css';
import PasswordField from '../components/PasswordField';
import axios from 'axios';
let yup = require('yup');

const Register = (match) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const history = useHistory();

	let schema = yup.object().shape({
		name: yup.string().required('Name is required'),
		email: yup
			.string()
			.email('Email is not in the right format')
			.required('Email is required'),
		password: yup.string().required('Password is required'),
		rePassword: yup
			.string()
			.required('Confirmed password is required')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	});

	const [errors, setErrors] = useState({});

	let validate = () => {
		schema
			.validate({ name, email, password, rePassword }, { abortEarly: false })
			.catch((err) => {
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
		schema
			.isValid({ name, email, password, rePassword })
			.then(async (valid) => {
				if (valid) {
					await axios
						.post(
							'/api/auth/register',
							{
								name: name,
								email: email,
								password: password,
							},
							{
								headers: { 'Content-Type': 'application/json' },
							}
						)
						.then((res) => {
							//localStorage.setItem('auth', JSON.stringify(res.data));
							console.log(res);
						});
					setErrors({});
					history.push('/login');
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
											type="text"
											className="form-control email"
											placeholder="Name"
											onChange={(event) => setName(event.target.value)}
										/>
									</div>
									<small className="validationError">
										{errors.name ? errors.name : ''}
									</small>
								</div>

								<div className="form-group">
									<div className="icon-text">
										<img
											src="/images/assets/mail.svg"
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

								<div className="form-group">
									<PasswordField
										placeholder="Repeat Password"
										handleChange={(event) => setRePassword(event.target.value)}
									/>
									<small className="validationError">
										{errors.rePassword ? errors.rePassword : ''}
									</small>
								</div>

								<button type="submit" className="login-btn">
									Submit
								</button>
							</form>
							<div className="login-account">
								Already have an account? <Link to="/login">Sign In</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
