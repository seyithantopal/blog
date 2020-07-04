const User = require('../models/userSchema');

exports.getAllUser = (req, res, next) => {
  User.find()
    .then((users) => {
      return res.json({ msg: 'Fetch successful', results: users });
    })
    .catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
};

exports.getUserWithId = (req, res, next) => {
  const id = req.query.id;
  User.findById({ _id: id })
    .then((user) => {
      return res.json({ msg: 'Fetch successful', results: user });
    })
    .catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
};
