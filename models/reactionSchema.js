// Reaction (SCHEMA ONLY)- to be used as the subdoc for reaction in the thought model
const reactionSchema = new.mongoose.Schema({

   reactionId:{
    type: {ObjectId},
    default:new.ObjectId,
    required: true,
},
reactionBody:
{
    type: {String, max:280,},
    required:true
},
username: { 
    type: String,
     required: true
    },
    createdAt: { 
        type: Date, default: Date.now 
        // Add getter method to format timestamp
    }});