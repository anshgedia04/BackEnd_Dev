const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required: true,
            maxLength: 50
        } , 
        desc : {
            type : String,
            required: true,
            maxLength: 50
        }
    })

module.exports = mongoose.model("Todo" , todoSchema)