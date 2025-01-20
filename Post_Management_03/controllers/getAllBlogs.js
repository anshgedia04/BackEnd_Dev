const Post = require("../models/postSchema");

const getAllBlogs = async(req , res) => {
  
    try{
        const allBlogs = await Post.find().populate("likes").populate("comments");
        res.json({
            data : allBlogs 
        })
    }
    catch(err) {
        res.json({
            data : "error in fetching all blogs" 
        })
    }
}
module.exports = {getAllBlogs};