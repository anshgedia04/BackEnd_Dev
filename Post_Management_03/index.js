const express = require("express");
const dbConnect = require("./config/database");

const ansh = express(); 

ansh.use(express.json());

ansh.listen(3000, () => {
    console.log("server started");
})

const app = require("./routes/blog");

ansh.use("/api/v1" , app);
dbConnect() ; 

ansh.get("/" , (req , res)=> {
    res.send("sab uppar se ja rha hai");
    console.log("ho gya bhai")
    
})