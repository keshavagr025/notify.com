const express = require('express');
const port = 8080;
const app = express();

app.listen(port, (err) =>{
    if(err){
        console.log(`Error in running server: ${err}`);
    }else{
        console.log(`Server is running on port: ${port}`);
    }
})

app.get("/", (req, res) =>{
    console.log("Server is Running well");
})