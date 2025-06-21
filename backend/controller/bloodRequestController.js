import Request from "../model/BloodRequest.js" 


export const bloodRequest = async (req,res)=>{
    try {
        const bloodRequest = new Request(req.body);
        const savedBloodRequest = await bloodRequest.save();
        res.status(201).json({msg:"Request created successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}

export const showBloodRequests = async(req,res)=>{
        try {
            const bloodDetails = await Request.find({isOpen:true});
            console.log(bloodDetails)
            if (!bloodDetails) {
                return res.status(404).json({ error: "No open blood requests found" });
            }
            res.status(200).json(bloodDetails);    
        } catch (error) {
            res.status(500).json({error:"Internal server error"});
        }
        
}