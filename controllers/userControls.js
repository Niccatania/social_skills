const { User, Thought } = require('../models');

module.exports = {
  // Get all users currently stored in our database
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
  .populate([
    {path:'thoughts', select: "-__v"},
    // {path:'friends', select: "-__v"}
  ])
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
          : user.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true },
              { message: 'User Deleted!' }

            )
          
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },




  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: params.friendId }  },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
}