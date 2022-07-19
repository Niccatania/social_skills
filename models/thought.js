const {Schema, model} = require('mongoose');
const reactionSchema = require('./reactionSchema')

const thoughtSchema = new Schema({

    thoughtText:{
    type: String,
     minlength:1,
     maxlength:280,
    required: true,
},
createdAt: { 
    type: Date, 
    default: Date.now },
// add getter method to format
username: {
    type: String,
    required: false,
},
reactions:[reactionSchema],

//  virtuals: true,

});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

// });



const Thought  = model('Thought', thoughtSchema);


// Thought.create(
//     {
//       username: 'banana',
//       thoughtText: 'frfr',
     
//     },
//     (err) => (err ? handleError(err) : console.log('Created new document'))
//   );


module.exports = Thought;