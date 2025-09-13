const express = require('express') ; 
const app = express() ; 
require('dotenv').config() ; 
require('./src/config/database').dbConnect() ; 


const PORT = process.env.PORT ; 


app.listen(PORT , () => {
    console.log(`Server Started SuccessFully on Port No : ${PORT}✅`); 
});