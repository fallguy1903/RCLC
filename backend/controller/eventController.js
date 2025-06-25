import { Event } from "../model/events.js"

export const postEvent = async(req,res)=>{
    try {
        const eventDetails = req.body;
        const newEvent = new Event(req.body);
        console.log(newEvent);
        await newEvent.save();
        res.status(200).json({msg:"Event registered successfully"});        
    } catch (error) {
        res.status(500).json({err:"Internal Server error"});
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