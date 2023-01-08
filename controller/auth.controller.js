const service=require("../service/auth.service")
const User=require("../model/user")

const signup=async(req,res)=>{
    try{
        const response=await service.signup(req.body)
        return res.json({
            message:"sucessfully Registered.",
            data:response
        })

    }
    catch(err){
       return res.status(400).json({err})
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email:email,password:password})
        if(user){
            const temp={
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                _id:user._id
            }
            //  return res.json({
            //     message:"Login Succefull",
            //     data:temp
            //  })
            return res.send(temp)
        }
        else{
            return res.status(400).json({message:"login failed!"})
    
        }
    }
    catch(err){
        return res.status(400).json({err})
    }


}

const getData=async(req,res)=>{
    try{
      const response=await User.find()
      return res.send(response)
    }
    catch(err){
       return res.status(400).json({err})

    }
}
module.exports={
    signup,login,getData
}