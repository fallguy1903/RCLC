import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export default function CreateEvent(){
    
    const navigate = useNavigate();

    const [eventData,setEventData] = useState({
        eventName:"",
        description:"",
        image:null
    })
    
    const handleChange = (e) =>{
        const {name, value, files} = e.target;
        if(name=='image')
            setEventData((prev)=>({...prev,image:files[0]}));
        else
            setEventData((prev)=>({...prev,[name]:value}))
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("eventName", eventData.eventName);
        formData.append("description", eventData.description);
        formData.append("image", eventData.image);
        try {
        await axios.post("http://localhost:5000/api/event/postEvents", formData);
        navigate("/events"); 
        } catch (error) {
        console.error("Error posting event:", error);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" onChange={handleChange} name="eventName" placeholder="Event Name"/>
                <textarea type="text" name="description" onChange={handleChange} placeholder="description"/>
                <input type="file" onChange={handleChange} name="image" />
                <button type="submit">Submit</button>
            </form>
            <a href="/events">Back</a>
        </div>
    )
}