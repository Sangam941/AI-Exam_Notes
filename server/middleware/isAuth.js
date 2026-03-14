import jwt from 'jsonwebtoken'

export const isAuth = async (req, res, next)=>{
    try {
        let {token} = req.cookies
        console.log(token)
        if(!token) return res.status(400).json({message:"token is not found", success:false})
        
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!verifyToken) return res.status(400).json({message:"Invalid token!", success:false})
        req.user = verifyToken

        next()
    } catch (error) {
        console.log("isAuth error", error)
        return res.status(500).json({message:`isAuth Error:: ${error}`, success:false})
    }
}