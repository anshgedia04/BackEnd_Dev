const express = require("express");
const { createPosts } = require("../controllers/createPosts");
const { createLike } = require("../controllers/createLike");
const { createUnlike } = require("../controllers/createUnlike");
const { createComment } = require("../controllers/createComment");
const { getAllBlogs } = require("../controllers/getAllBlogs");
const { deleteComment } = require("../controllers/deleteComment");
const route = express.Router();

route.post("/posts/create" , createPosts )
route.post("/likes/like", createLike)
route.post("/likes/unlike" , createUnlike)
route.post("/comments/create",createComment )
route.get("/get/posts" , getAllBlogs)
route.post("/comment/remove" , deleteComment)
module.exports = route ;