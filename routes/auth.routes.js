const controller=require("../controller/auth.controller")

const Routes=(app)=>{
   app.post("/orbizRooms/register",controller.signup)
   app.post("/orbizRooms/login",controller.login)
   app.get("/orbizRooms/users/getdata",controller.getData)
}

module.exports=Routes