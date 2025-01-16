const Todo = require("../model/Todo")

todoCreate = ( req , res) =>  {
    try{
        const {title , desc} = req.body ;
    const responce = Todo.create({title , desc}) ;
    res.status(200).json({
        success : true,
        data:responce, 
        message : 'data aa chuka hai bhai'
    })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success : false,
            data: "server eroor", 
            message : 'data aa chuka hai bhai'
        })
    }
}
module.exports = {todoCreate} ; 