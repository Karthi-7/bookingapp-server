const express=require("express")
const app=express()
const dbConfig=require("./db")
var bodyParser = require('body-parser')
const PORT=process.env.PORT || 5000

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