const mongoose = require("mongoose")


const  connectDB = ()=>{
    mongoose.set('strictQuery',false)
   return  mongoose.connect("mongodb+srv://admin:admin123@instaclone.wm9cx6k.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected to db")
   }).catch((e)=>{
    console.log(e.message);
   })
}

module.exports = connectDB;