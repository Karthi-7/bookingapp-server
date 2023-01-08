const mongoose=require('mongoose')

const bookingSchema=mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    roomId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    totalDays:{
        type:Number,
        required:true
    },
    transcationId:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"booked"
    }

    

    
},{
    timestamps:true
})

const bookingModal=mongoose.model('bookings',bookingSchema)

module.exports=bookingModal