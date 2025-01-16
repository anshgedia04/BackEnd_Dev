const Todo = require("../model/Todo");

deleteTodos = async(req, res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message : "data deleted"
        })
    }
    catch(err){
        console.log(err.message);
        res.status(404).json({
            success: false,
            message : "data not found & not deleted"
        })
    }
}
module.exports  = {deleteTodos} ;