const mongoose= require("mongoose");

const postSchema = mongoose.Schema({
    
            name:{type:String},
            location:{type:String},
            likes:{type:String,default:0},
            description: {type:String},
            PostImage:{type:String},
            date: {
                    type:String,
                default:new Date().toLocaleDateString()
            }
})

const post = mongoose.model('Post',postSchema);
module.exports = post