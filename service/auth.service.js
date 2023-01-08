const User=require("../model/user")

const signup=async(data)=>{
    const newUser= new User(data)

    try{
        const response=await newUser.save()
        return response
    }
    catch(err){
        console.log(err)
    }
}

module.exports={
    signup
}