const mongoose = require('mongoose');

const user = new.mongoose.Schema(
    {
username: { 
    type: String,
     required: true
    },
// must be unique and trimmed
email: { 
    type: String, 
    required: true
},
thoughts: [
    {
    type: Schema.Types.ObjectId, ref: 'Thought' 
    }
],
friends: [{
    type:Schema.Types.ObjectId, ref:'User'
}]

// must be unique and valid email
});
// This virtual should return the Users friend
user.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  

const User = mongoose.model('User', user);

// const handleError = (err) => console.error(err);

module.exports = User

