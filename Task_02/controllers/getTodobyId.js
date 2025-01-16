const Todo = require("../model/Todo");

getTodobyId = async(req , res) => {
  try{
    const {id} = req.params ;

    const todo= await Todo.findById({_id : id})
    res.status(200).json({
        success : true,
        data : todo,
        message :"single todo fetced successfull"
    })
  }
  catch(err){
    console.log(err);
    res.status(500).json({
        success : false,
        data : "can't get data",
        message :"single todo fetching unsuccessfull"
    })
  }
}
module.exports = {getTodobyId}