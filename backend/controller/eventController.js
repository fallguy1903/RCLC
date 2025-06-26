import { Event } from "../model/events.js"
import cloudinary from "../utils/cloudinary.js";


export const postEvent = async(req,res)=>{
    try {
        const { eventName, description, startDate, hasTicket } = req.body;
        let imageURL = "";
        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder:"events",
            });
            imageURL = result.secure_url;
        }
        const newEvent = new Event({
            eventName,
            description,
            startDate,
            hasTicket,
            imageURL,
        });
        console.log(newEvent);
        await newEvent.save();
        res.status(200).json({msg:"Event registered successfully"});        
    }catch (error) {
    console.error("Error uploading event:", error); 
    res.status(500).json({ err: error.message });
}
}

export const getEvents = async(req,res)=>{
    try{
        const events = await Event.find({});
        res.status(200).json(events);
    }
    catch(err){
        res.status(500).json({err:"Internal server error"});
    }
}