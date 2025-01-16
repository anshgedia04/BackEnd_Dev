const express = require("express");
const ansh = express();
const bodyParser = require("body-parser");
ansh.use(bodyParser.json()) ;

ansh.listen(3000 , () => {
    console.log("server started") ;
})

ansh.get('/' , (request , responce) => {
    console.log("yes") ;
    responce.send("fetched successfully")
})
 

ansh.post(('/api/cars') ,(request , responce) => {
    // const name = request.body.name ;
    // const brand  = request.body.brand ;
    const {name, brand}  = request.body ;
    console.log(name);
    console.log(brand);
    responce.send("cars here")
})

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo-1" , {
  
})
.then(()=> console.log("mongoose here"))
.catch((error) =>  console.log("error here" )) ;