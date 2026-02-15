
const mongoose = require('mongoose');

const dotenv = require('dotenv').config()   

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to db");
    }catch(error){
        console.error(error);
    }
}

module.exports = connectDB;