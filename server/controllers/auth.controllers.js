import { UserModel } from "../models/user.model.js"
import { generateToken } from "../utils/generateToken.js"


export const googleAuth = async (req, res)=>{
    try {
        const { name, email } = req.body

        let user = await UserModel.findOne({email})
        
        if(!user){
            user = await UserModel.create({
                name,
                email,
            })
        }

        let token = generateToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            // secure: false,
            secure: true,
            // sameSite: "strict",
            sameSite: "None",
            maxAge: 7*24*60*60*1000
        })

        return res.status(200).json({message: "user created successfully", success:true, user})

    } catch (error) {
        return res.status(500).json({message:`googleAuth Error:: ${error}`, success:false})
    }
}

export const logoutUser = async(req,res)=>{
try {
    res.clearCookie("token")
    return res.status(201).json({message:"Logout successfully",  success:true})
} catch (error) {
    return res.status(500).json({message:`Logout Error:: ${error}`, success: false})
    
}
}