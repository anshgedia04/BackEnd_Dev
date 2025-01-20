const Like = require("../models/likeSchema");
const Post = require("../models/postSchema");

const createUnlike = async(req ,res) => {
   
    try{
        const {post, like} = req.body ; 

        const deletedLike = await Like.findByIdAndDelete(like);
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deletedLike._id } },
            { new: true }
          );
        res.json({
            data : updatedPost
        })
    }
    catch(err){
        res.json({
            data :  "deleted unsuccessfull"
        })
    }
}

module.exports = {createUnlike}

