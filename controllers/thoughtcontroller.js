const { Thought, User, } = require('../models');



module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
// CREATE THOUGHT

createThought(req, res) {
  Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { user: thought._id } },
        { new: true }
      );
    })
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: 'Thought created, but found no user with that ID' })
        : res.json('Created the Thought ')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},


  getSingleThought({params}, res) {
    Thought.findOne({ _id: params.id })
    // .populate({
    //   path:'reactionSchema', 
    //   select: "-__v"
    // },
    // )
      .select('-__v')
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        res.status(400).json(err)
      });
  },

updateThought(req,res){
  Thought.create(req.body)
  .then((dbThoughtData)=>{
    return User.findOneAndUpdate(
      {_id:req.body.userId},
      {$push:{thoughts:dbThoughtData._id}},
      {new: true}
    )
  })
.then((dbThoughtData)=>res.json(dbThoughtData))
  }
}
