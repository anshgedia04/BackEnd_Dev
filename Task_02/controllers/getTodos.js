const Todo = require("../model/Todo");

 getTodo = async(req , res)  => {
    try{
        const todos =await Todo.find({});
        res.status(200).
        json({
            success: true,
            data:todos,
            message:"data fetched successfull"
        })
    }
    catch(err){
        console.log(err.message);
        res.status(500).
        json({
            success: false,
            data:"internal server error",
            message:"error ayya hai"
        })
    }

}
module.exports = {getTodo}