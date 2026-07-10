const User = require("../models/user.model");

exports.getUsers = () => User.findAll();

exports.getUser = (id) => User.findById(id);

exports.createUser = (user) => User.create(user);

exports.updateUser = (id, user) => User.update(id, user);

exports.deleteUser = (id) => User.remove(id);