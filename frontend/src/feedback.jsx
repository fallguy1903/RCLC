import axios from "axios";
import { useState } from "react"

export default function Feedback(){
    const [feedback,setFeedback] = useState('');
    const [title,setTitle] = useState(' ');
    
        const handleClick = async(req,res)=>{
        try {
        const response = await axios.post("http://localhost:5000/api/feedback/postFeedback",{title,feedback});
        console.log(response);    
         } 
        catch(error) {
            console.log("Feedback error")   
        }
        }
    return(
        <>
            <h1>Feedback</h1>
            <input type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea cols="30" rows="20" placeholder="Enter your feedback" onChange={(e)=>{setFeedback(e.target.value)}}/>
            <button onClick={handleClick}>Submit</button>
            <a href="/showFeedback">View Feedbacks</a>
            <br />
            <a href="/home">Back</a>
        </>
    )
}