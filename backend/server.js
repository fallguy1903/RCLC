import express, { urlencoded } from "express"
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import bloodRequestRoutes from "./routes/bloodRequestRoutes.js"
import connectDB from "./db/connectDB.js";


dotenv.config();

const PORT = process.env.PORT||5000;

const app = express();

app.use(cors());
app.use(urlencoded({extended:true}));
app.use(express.json());

app.use("/api/auth",userRoutes);
app.use("/api/req",bloodRequestRoutes);

app.listen(PORT,()=>{
    console.log("Listening on port 5000")
    connectDB();
})
