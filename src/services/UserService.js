const { User } = require('../models/index.js');

module.exports = {
  create: (body) => new User(body).save(),
  findOneByID: (id) => User.findById(id),
  findOneByUserName: (username) => User.findOne({username: username }),
  updateOne: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deleteOneById: (id) => User.findByIdAndDelete(id),
};