import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    postedAt:{
        type:Date,
        default:Date.now,
    },
    postedBy:{
        type:String,
    }
})

const Feedback = new mongoose.model("Feedback",feedbackSchema);
export default Feedback;