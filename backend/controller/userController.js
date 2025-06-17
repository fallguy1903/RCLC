import User from "../model/user.js";

export const registerUser = async (req,res)=>{
    const {memberId,password,mobile,fullName} = req.body;
    const user = await User.findOne({memberId});
    console.log("here")
    if(user)
        res.status(200).json({err:"member already exists"});
    else
    {
        const newUser = new User({
        memberId,
        password,
        mobile,
        fullName
        });
        await newUser.save();
        console.log("User registered successfully");
        res.status(200).json({msg:"member registered successfully"});
    }
    
}