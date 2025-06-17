import mongoose from "mongoose";

 const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (error) {
        res.status(400).send("Internal server error");
    }
}

export default connectDB;