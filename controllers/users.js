const userModel = require('../models/users');

module.exports.findAll = (req, res) => {
  userModel.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Failed to get users' }));
};

module.exports.findUser = (req, res) => {
  userModel.findById({ _id: req.params.id })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Failed to get user' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  userModel.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Failed to create user' }));
};
