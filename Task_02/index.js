const express = require("express");
const ansh = express();
ansh.use(express.json());


const todoRoutes = require("./routes/todos");



ansh.use("/api/v1" , todoRoutes);

ansh.listen(8000, () => { 
console.log("port run succesfully ")
}); 
const dbConnect = require("./config/database");
dbConnect();

ansh.get("/" , (req , res) => {
    res.send("get run successfully")
    console.log("get successfull") ; 
});