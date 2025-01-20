const Comment = require("../models/commentSchema");
const Post = require("../models/postSchema");

const createComment = async(req ,res) => {
  
    try{
        const {post , body} = req.body ;
        const addedComment = await Comment.create({post , body});
    
        const updatedPost = await Post.findByIdAndUpdate(post , {$push : {comments : addedComment._id}} , {new : true}).populate("comments") ; 
        res.status(200).json({
            data : updatedPost 
        })
    }
    catch(err){
        res.status(500).json({
            data : "error in comments" 
        })
    }
}
module.exports  = {createComment};