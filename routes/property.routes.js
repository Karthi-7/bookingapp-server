const controller=require("../controller/property.controller")

const Routes=(app)=>{
    app.get("/orbizRooms/getdata",controller.getData)
    app.get("/orbizRooms/getroomById",controller.getDataById)
    app.post("/orbizrooms/addroomdata",controller.addRooms)
 


    
}

module.exports=Routes