const Comment = require("../models/commentSchema");
const Post = require("../models/postSchema");


const deleteComment = async(req , res) => {
    
    try{
        const {post , comment} =req.body ;
    const deleted_Comment =await Comment.findByIdAndDelete({_id : comment}) ;
    const updated_post = await Post.findByIdAndUpdate(post , {$pull : {comments : deleted_Comment._id}} , {new : true});
    res.json({
        data:updated_post
    })
    }
    catch(err) {
        res.json({
            data: "error in comment delete"
        })
    }
}
module.exports  = { deleteComment}