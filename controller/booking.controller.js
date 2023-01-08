
const Booking=require('../model/booking')
const Room=require("../model/properties")

const bookRoom=async(req,res)=>{
  const {room,userId,fromDate,toDate,totalDays,totalRent}=req.body;
  try{
    const newBooking=new Booking({
      room:room.name,
      roomId:room._id,
      userId,
      fromDate,
      toDate,
      totalAmount:totalRent,
      totalDays,
      transcationId:"12345"
    })
    const booking=await newBooking.save()
    const roomtemp=await Room.findOne({_id:room._id});

    roomtemp.currentBookings.push({
      bookingid:booking._id,
      fromDate:fromDate,
      toDate:toDate,
      uderId:userId,
      status:booking.status
    })
    await roomtemp.save()
    return res.json({
      message:"succefully booked room"
    })
  }
  catch(err){
   return res.status(400).send(err)
  }

}

const getbookingbyid=async(req,res)=>{
    const userId=req.body.userid
  

    try{
       const response=await Booking.find({userid:userId})
       return res.send(response)
    }
    catch(err){
     return res.status(400).json({err})

    }
}

const cancelBooking=async(req,res)=>{
  const {bookingid,roomid}=req.body
  try{
     const response=await Booking.findOne({_id:bookingid})
     response.status='cancelled'
     await response.save()
     const room=await Room.findOne({_id:roomid})
     const bookings=room.currentBookings
     const temp=bookings.filter(booking=>booking.bookingid.toString() !== bookingid)
     room.currentBookings=temp
     await room.save()
     res.send("your booking cancelled sucessfully")
  }
  catch(err){
   res.status(400).json({err})
  }
}

const getallBookings=async(req,res)=>{
  try{
   const response=await Booking.find()
   return res.send(response)
  }
  catch(err){
     res.status(400).json({err})
  }
}

module.exports={
  bookRoom,getbookingbyid,cancelBooking,getallBookings
}