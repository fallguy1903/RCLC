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
    const  memberId  = String(req.params.memberId);
    
    const response = await User.deleteOne({ memberId });

    res.status(200).json({ msg: "Removed successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ err: "Internal Server error" });
  }
};

export const getUser = async(req,res)=>{
  try {
    const  memberId  = String(req.params.memberId);

    const response = await User.findOne({memberId});

    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({msg:"failed to fetch member Details"})
  }
}

export const editUser = async(req,res)=>{
  try {
    const memberId = String(req.params.memberId);

    await User.updateOne({memberId},req.body);

    res.status(200).json({msg:"Updated successfully"})


  } catch (error) { 
    res.status(500).json({error:"unable to update at the moment"})
    
  }
}