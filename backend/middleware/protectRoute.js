import User from "../model/user.js";
import jwt from 'jsonwebtoken';

export const ProtectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token)
        {
            return res.status(401).json({error:"Unauthorized: No Token Provided"});
        }
        console.log("Works")
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        if(!decoded)
            return res.status(401).json({error:"Unauthorize: Invalid Token"});

        const user = await User.findById(decoded.userId).select("-password");
        
        if(!user)
            return res.status(404).json({error: "User not found"});

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({error:"Internal Server Error"});
    }
}