import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

export default function ShowFeedback(){
    const [feedbacks,setFeedbacks] = useState([]);
    
    useEffect(()=>{
        const fetchRequests = async()=>{    
            const res = await axios.get("http://localhost:5000/api/feedback/getFeedback",{ withCredentials: true });
            setFeedbacks(res.data);
        }
        fetchRequests();
        },[])
    
    return(
        <>
            <h1>FEEDBACKS</h1>
            {
            feedbacks.map((val,idx)=>{
                return <div key={idx}>
                    <h1>{val.title}</h1>
                    <p>{val.feedback}</p>
                    <p>{new Date(val.postedAt).toLocaleDateString()}</p>
                </div>
            })
            }
            <a href="/feedback">Back</a>
        </>
    )
}