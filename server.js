const connectDB = require("./DB-connection/connectDB")
const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const route = require("./Routes/Post")
dotenv.config();
const app = express();

app.use(cors())
app.use(express.json({limit:"5mb"}));

//routes
app.use("/",route)


app.listen(process.env.PORT,async ()=>{
    await connectDB();
    console.log(`The server is up ${process.env.PORT}`)
})