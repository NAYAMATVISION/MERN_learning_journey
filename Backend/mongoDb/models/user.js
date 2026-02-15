const {Schema,model} = require("mongoose")

const userScema = new Schema({
    name : String,
    email : String,
    password : String
})

const userModel = model("users",userScema)

module.exports = userModel