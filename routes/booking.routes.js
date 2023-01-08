const controller=require("../controller/booking.controller")

const Routes=(app)=>{
    app.post('/orbizRoom/bookroom',controller.bookRoom)
    app.post('/orbizRooms/getbookingbyuserid',controller.getbookingbyid)
    app.post('/orbizRooms/cancelBooking',controller.cancelBooking)
    app.get('/orbizRooms/getAllBookings',controller.getallBookings)
}

module.exports=Routes