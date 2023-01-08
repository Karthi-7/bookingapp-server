const mongoose=require("mongoose")

const propertySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    noofhouse:{
        type:Number,
        required:true
    },
    no_of_rooms:{
        type:Number,
        required:true
    },
    minimumStay:{
        type:Number,
        required:true
    },
    maximumStay:{
        type:Number,
        required:true
    },
    size_of_room:{
        type:String
    },
    number_of_beds:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    imgUrl:[],
    currentBookings:[],
    
    description:{
        type:String
    },
    amenties:{
       type:String
        
       
    }
},{
    timestamps:true
})

const propertyModel=mongoose.model("Properties",propertySchema)

module.exports=propertyModel