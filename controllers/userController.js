const {User} = require('..models');

module.exports = {
  // Get all courses currently stored in our database
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  }}