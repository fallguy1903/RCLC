import User from "../model/user.js";

export const getUsers = async(req,res)=>{
    try{
        const users =await User.find({});
        console.log(users);
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json("Internal Server error");
    }
}

export const removeUser = async (req, res) => {
  try {
    const  memberId  = String(req.body.memberId);
    
    const response = await User.deleteOne({ memberId });

    res.status(200).json({ msg: "Removed successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ err: "Internal Server error" });
  }
};
