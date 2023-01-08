const service=require("../service/property.service");
const Room=require("../model/properties")

const getData=async(req,res)=>{
    try{

        const response=await service.getData()
        return res.json({
            message:"succefully fetched data",
            data:response
        })

    }
    catch(err){
     console.log(err)
    }
}

const getDataById=async(req,res)=>{
    const roomId=req.body.roomId
    try{
        const response=await service.getroomById(roomId)
        return res.json({
            data:response
        })

    }
    catch(err){
      return res.json({
        message:err
      })
    }
}

const addRooms=async(req,res)=>{

    try{
        const newroom= new Room(req.body)
        await newroom.save()
        return res.send("Room added sucessfully")
    }
    catch(err){
        return res.status(400).json({})
    }

}



module.exports={
    getData,getDataById,addRooms
}