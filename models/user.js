const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
username: { 
    type: String,
    unique: true,
     required: true,
     trim:true
    },
email: { 
    type: String, 
    unique: true,
    required: true,
    trim:true
},
thoughts: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Thought' 
    },
],
friends: [{
    type:Schema.Types.ObjectId,
    ref:'userSchema'
}]
    },
{
toJson: {
    virtuals: true,
    getters: true,
},
id:false
}
    
);
// This virtual should return the Users friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  

const User = model('User', userSchema);

// const handleError = (err) => console.error(err);d
// User.create(
//     {
//       username: 'banana',
//       email: 'banana@mail.com',
     
//     },
//     // (err) => (err ? handleError(err) : console.log('Created new document'))
//   );

module.exports = User;

