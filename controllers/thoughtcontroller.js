const { Thought } = require('../models');



module.exports = {
  // Get all courses currently stored in our database
  getAllThoughts(req, res) {
    Thought.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  postNewThought(req, res) {
    Thought.create(req.body)
      .then((dbUserdata) => res.json(dbUserdata))
      .catch((err) => res.status(500).json(err));
  },}

