const router = require("express").Router();
const post = require("../Models/post")


router.get("/test",(req,res)=>{
    res.send("Working")
})
router.get("/getPost",async (req,res)=>{
    try{
        const data = await post.find();
        res.status(200).json({
            user:data
        })
    }catch(e){
        res.status(400).json({
            message:"Server issue"
        })
    }
})

router.post("/createPost",async (req,res)=>{
    try{
        console.log(req.body)
        const {author,location,description,image} = req.body
      
        const newPost = await new post({
            name:author,
            location:location,
            description:description,
            PostImage:image
        })
        newPost.save();
        return res.status(200).json({
            user:newPost
        })
    }catch(e){
        res.status(400).json({
            message:"Server issue"
        })
    }
})

module.exports = router