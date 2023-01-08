const mongoose=require("mongoose")
mongoose.set('strictQuery', true);

const mongodbUrl="mongodb+srv://cartrabbit:orbiz123@cluster0.qjqlgmr.mongodb.net/orbiz-rooms"

mongoose.connect(mongodbUrl,{useUnifiedTopology :true,useNewUrlParser:true})


var connection=mongoose.connection

connection.on('error',()=>{
    console.log("mongodb connection failed")
})

connection.on('connected',()=>{
    console.log("mongodb connection successful")
})

module.exports=mongoose