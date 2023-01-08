const property=require("../model/properties")

const getData=async()=>{
  try{
    const response=await property.find({})
    return response
  }
  catch(err){
    console.log(err)
  }
}

const getroomById=async(data)=>{
  try{
    const response=await property.findOne({_id:data})
    return response

  }
  catch(err){
    return err

  }
}


module.exports={
    getData,getroomById
}