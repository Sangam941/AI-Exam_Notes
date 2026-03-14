import { UserModel } from "../models/user.model.js"


export const currentUser = async (req, res)=>{
    try {
        const currentuser = await UserModel.findById(req.user?.userId)

        if (!currentUser) return res.status(400).json({message: "user not found", success:false})
        
        return res.status(200).json({message: "current user found", success:true, currentuser})
    } catch (error) {
        return res.status(500).json({message: `current user Error:: ${error}`, success:false})
    }
}