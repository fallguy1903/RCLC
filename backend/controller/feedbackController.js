import Feedback from "../model/feedback.js"

export const PostFeedback = async(req,res)=>{
    try {
        const feedback = req.body;
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.status(200).json({feedback})    
    } catch (error) {
        res.status(500).json({error:"Internal Server error"});
    }
    
}

export const getFeedback = async(req,res)=>{
    try {
        const feedback = await Feedback.find({});
        res.status(200).json(feedback);    
    } catch (error) {
        res.status(500).json({error:"Internal Server error"});
    }
    
}