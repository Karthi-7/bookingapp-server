const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
require('dotenv').config()

const mongodbUrl=process.env.MONGODB_URL

mongoose.connect(mongodbUrl,{useUnifiedTopology :true,useNewUrlParser:true})


var connection=mongoose.connection

connection.on('error',()=>{
    console.log("mongodb connection failed")
})

connection.on('connected',()=>{
    console.log("mongodb connection successful")
})

module.exports=mongoose