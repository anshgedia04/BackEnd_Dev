const mongoose = require("mongoose");

function dbConnect () {
    mongoose.connect("mongodb://localhost:27017/mongo-1")
            .then(() => console.log("db connected successfully"))
            .catch((err) => console.log("error is here")) ;
}
module.exports = dbConnect ;