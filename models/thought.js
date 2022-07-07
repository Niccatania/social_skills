const {Schema, model, Types} = require('mongoose');

const thought = new Schema({

    thoughtText:{
    type: String,
     minlength:1,
     maxlength:280,
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

}
);

thought.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });





const Thought  = model('Thought', thought);


// Thought.create(
//     {
//       username: 'banana',
//       thoughtText: 'frfr',
     
//     },
    // (err) => (err ? handleError(err) : console.log('Created new document'))
//   );


module.exports = Thought