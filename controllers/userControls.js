const { User } = require('../models');



module.exports = {
  // Get all courses currently stored in our database
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  postNewUser(req, res) {
    User.create(req.body)
      .then((dbUserdata) => res.json(dbUserdata))
      .catch((err) => res.status(500).json(err));
  },


// // Get a single user
getSingleUser(req, res) {
  User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then(async (user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json({
            user
          })
    )
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });

  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Course.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : User.findOneAndUpdate(
              { users: req.params.userId },
              { $addToSet: { username: req.body } },
              { runValidators: true, new: true }
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
 






}



















  // Create seeds for user thought or if theres a way to add them directly, Why is the reaction schema only?