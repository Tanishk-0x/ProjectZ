const mongoose = require('mongoose') ; 
require('dotenv').config() ; 

const MongoUrl = process.env.MONGO_URL ; 

exports.dbConnect = () => {

    mongoose.connect(MongoUrl)
    .then(() => {
        console.log("DB Connected SuccessFully✅"); 
    })
    .catch((err) => {
        console.log("Error in DB Connection : " , err); 
    })
    
}