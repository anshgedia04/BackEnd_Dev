const Like = require("../models/likeSchema");
const Post = require("../models/postSchema");
const createLike = async(req ,res) => {
    try{
        const { post , user} =req.body ; 
        const savedLike =await Like.create({post , user});

        //after create a like we have to update in it on post sections like object 
        const updated_post = await Post.findByIdAndUpdate({_id : post} , {$push : {likes : savedLike._id}} , {new : true}).populate("likes").exec();

        res.status(200).json({
            data : updated_post
        })
    }
    catch(err){
        res.status(500).json({
            data : "error in like"
        })
    }
}


module.exports = {createLike}


