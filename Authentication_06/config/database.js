const mongoose = require('mongoose');
require("dotenv").config()

exports.connect = () => {
    mongoose.connect("mongodb://localhost:27017/AuthApp",{
        
    })
    .then(() => {
        console.log("Database Connection established")
    })
    .catch((err) => {
        // console.error(err)
        console.log("Connection Issues with Database");
        process.exit(1);
    })
}