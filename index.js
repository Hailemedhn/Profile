const express = require("express");

const app = express();
app.get("/",(req,res)=>{res.json({message:"hello world"})});
app.listen(process.env.PORT || 80, ()=>{console.log("listening")})