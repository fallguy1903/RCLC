import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    postedOn:{
        type:Date,
        default:Date.now,
    },
    startDate:{
        type:Date,
        default:Date.now
    },
    hasTicket:{
        type:Boolean,
        default:false,
    },
    imageURL:{
        type:String
    }
})

export const Event = new mongoose.model("Event",eventSchema);