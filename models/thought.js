const mongoose = require('mongoose');

const thought = new.mongoose.Schema({

    thoughtText:{
    type: {String, min:1, max:280,},
    required: true,
},
createdAt: { type: Date, default: Date.now },
// add getter method to format
username: {
    type: String,
    required: true,
    ref: 'User' 
},
reactions:
['reactionSchema'],

});

thought.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });





const Thought  = mongoose.model('Thought', thought);

module.exports = Thought