const Post = require("../models/postSchema");

const createPosts = async(req ,res) => {
    
    try{
        const  {title , body} = req.body ;
        const responce = await Post.create({title , body});
        res.status(200).json({
            data : responce 
        })
    }
    catch(err) {
        res.status(500).json({
            data: "could not find the posts"
        })
    }
}
module.exports = {createPosts} ;