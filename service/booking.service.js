const booking=require("../model/booking")
const propertyModel=require("../model/properties")

const bookRoom=async(data)=>{
    const {room,userId,fromDate,toDate,totalDays,totalRent}=data;
    try{
        const newBooking =new booking (
            {
                room:room.name,
                roomId:room._id,
                userId,
                fromDate,
                toDate,
                totalAmount:totalRent,
                totalDays,
                transcationId:"12345"

            }
        )
        const response=await newBooking.save()
        return response

    }
    catch(err){
        console.log(err)

    }
}

module.exports={
    bookRoom
}