const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

exports.register = (req, res, next) => {
    const { name, email, password } = req.body;

	// validation
	if (!name || !email || !password)
		return res.status(400).json({ msg: 'Please enter all fields required' });

	// check for existing user
	User.findOne({ email: email }).then((user) => {
		if (user) return res.status(400).json({ msg: 'User already exists' });

		const newUser = new User({
			name,
			email,
			password,
		});

		// create salt and hash
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser.save().then((user) => {
					jwt.sign(
						{ id: user.id },
						process.env.JWT_SECRET_KEY,
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							res.json({
								token: token,
								user: {
									id: user.id,
									name: user.name,
									email: user.email,
								},
							});
						}
					);
				});
			});
		});
	});
}

exports.login = (req, res, next) => {
    const { email, password } = req.body;

	// validation
	if (!email || !password)
		return res.status(400).json({ msg: 'Please enter all fields' });

	// check for existing user
	User.findOne({ email: email }).then((user) => {
		if (!user) return res.status(400).json({ msg: 'User does not exist' });

		// validate password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
			jwt.sign(
				{ id: user.id },
				process.env.JWT_SECRET_KEY,
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err;
					res.json({
						token: token,
						user: {
							id: user.id,
							name: user.name,
							email: user.email,
						},
					});
				}
			);
		});
	});
}