import React, { useState } from 'react';

const PasswordField = (props) => {
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState('/images/assets/eye1.svg');
	const [value, setValue] = useState('');

	const eyeIconHandle = () => {
		if (type === 'password') {
			setType('text');
			setIcon('/images/assets/eye2.svg');
		} else if (type === 'text') {
			setType('password');
			setIcon('/images/assets/eye1.svg');
		}
	};

	const handleChange = () => {};

	return (
		<div className="icon-text password-icon">
			<img src="/images/assets/lock.svg" className="username-icon" />
			<input
				type={type}
				id="password"
				className="form-control password"
				placeholder={props.placeholder}
				/*onChange={(event) => setValue(event.target.value)}
				value={value}*/
				onChange={props.handleChange}
			/>
			<img
				src={icon}
				className="eye-icon"
				data-type="password"
				onClick={eyeIconHandle}
			/>
		</div>
	);
};

export default PasswordField;
