import User from "../model/user.js";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const registerUser = async (req,res)=>{
    try {
        const {memberId,password,mobile,fullName} = req.body;
        const user = await User.findOne({memberId});
        if(user)
            res.status(200).json({err:"member already exists"});
        else
        {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const newUser = new User({
            memberId,
            password:hashedPassword,
            mobile,
            fullName
            });
            if(newUser){
                generateTokenAndSetCookie(newUser._id,res);
                console.log("token generated");
                await newUser.save();
                console.log("User registered successfully");
                res.status(200).json({msg:"member registered successfully"});
            
            }
            
        }    
    } catch (error) {
        res.status(400).json({err:"Unsuccesssfull"})
    }
    
    
}

export const login = async(req,res)=>{
    try {
        const {memberId,password} = req.body;
        const user = await User.findOne({memberId})
        if(!user)
            res.status(400).json({err:"Register before login"})
        if(bcrypt.compareSync(password, user.password))
        {
            generateTokenAndSetCookie(user._id,res);
            const { _id, memberId, fullName, role } = user;
            res.status(200).json({
            msg: "User Logged in",
            user: { _id, memberId, fullName, role }
            });
        }
        else    
        res.status(400).send("Wrong credentials");        
    } catch (error) {
        res.status(401).send("Internal server error");
    }
    
}

export const logout = async(req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({msg:"logged out successfully"});
    }
    catch(err){
        res.status(500).json({err:"Internal server error"});
    }
    
}