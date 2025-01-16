const express = require("express");
const { todoCreate } = require("../controllers/todoCreate");
const { getTodo } = require("../controllers/getTodos");
const { getTodobyId } = require("../controllers/getTodobyId");
const { updateTodos } = require("../controllers/updateTodos");
const { deleteTodos } = require("../controllers/deleteTodos");





const router = express.Router() ;
router.post("/createTodos", todoCreate );
router.get("/getTodos" , getTodo)
router.get("/getTodobyId/:id" , getTodobyId);
router.put("/updateTodos/:id" , updateTodos );
router.delete("/deleteTodos/:id" , deleteTodos) ; 

module.exports = router ;