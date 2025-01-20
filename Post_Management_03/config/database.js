const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect("mongodb://localhost:27017/blogAppp")
            .then( () => console.log("db connection established"))
            .catch( (err) => console.log(err) );
}
module.exports = dbConnect ;  