const {Schema, model, Types} = require('mongoose');


const reactionSchema = new Schema({

   reactionId:{
       type: Schema.Types.ObjectId,
    default:new Types.ObjectId,
    required: true,
},
reactionBody:
{
    type: String, 
        maxLength: 280,
    required:true
},
username: { 
    type: String,
     required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
        // Add getter method to format timestamp
    }
},
    {
        toJSON: {
            getters: true
        },
        id: false
    });
    
    module.exports = reactionSchema;