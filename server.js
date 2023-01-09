const express=require("express")
const app=express()
const dbConfig=require("./db")
const cors=require("cors")
var bodyParser = require('body-parser')
const PORT= 5000

app.use(cors({
    origin:"https://orbiz-rooms-client.onrender.com"
}))


//import routes
const PropertyRoutes=require("./routes/property.routes")
const AuthRoutes=require("./routes/auth.routes")
const BookRoutes=require("./routes/booking.routes")



// parse urlencode

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routes
PropertyRoutes(app)
AuthRoutes(app)
BookRoutes(app)







app.listen(PORT,()=>{
    console.log("server is listening to the port")
})