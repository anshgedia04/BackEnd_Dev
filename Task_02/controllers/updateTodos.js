const Todo = require("../model/Todo");

updateTodos = async(req , res)  => {
    const {id} = req.params ; 
    const {title , desc} = req.body ; 
    try{
       
        const todos =await Todo.findByIdAndUpdate(
            {_id : id},
            {title , desc}
        );
        res.status(200).
        json({
            success: true,
            data:todos,
            message:"data updated successfull"
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
module.exports={updateTodos}