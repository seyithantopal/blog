const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const token = req.header('x-auth-token');

	// check for token
	if (!token)
		return res.status(401).json({ msg: 'Access denied! Unauthorized access!' });

	try {
		// verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		// add user from payload
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(400).json({ msg: 'Token is not valid' });
	}
}

module.exports = auth;
