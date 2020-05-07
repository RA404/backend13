// const mongoose = require('mongoose');
const userModel = require('../models/users');

// const { ObjectId } = mongoose.Types;

module.exports.findAll = (req, res) => {
  userModel.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Something wrong' }));
};

module.exports.findUser = (req, res) => {
  const { id } = req.params.id;
  userModel.findById({ _id: id })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Something wrong' }));
};

module.exports.createUser = (req, res) => {
  res.send(req.body);
  const { name, about, avatar } = req.body;
  userModel.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: req.params }));
};
