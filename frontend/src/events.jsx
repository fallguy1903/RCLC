import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Events(){
    const [allEvents,setAllEvents] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{ async function getAllEvents(){
        try {
            const events = await axios.get("http://localhost:5000/api/event/getEvents");
            if(events)
                setAllEvents(events.data);
            else
                console.log("No events found");    
        } catch (error) {
            console.log("Error fetching events");
        };
        }getAllEvents();},[])
        const handleClick = ()=>{
            navigate("/createEvent");
        }
    return(
        <>
            <h1>Events</h1>
            {
                allEvents.map((ele,idx)=>(
                    <div key={idx}>
                        <h3 >{ele.eventName}</h3>
                        <p>{ele.description}</p>
                        <img 
                            src={ele.imageURL} 
                            alt={ele.eventName} 
                            style={{ width: '200px', height: 'auto' }} 
                        />
                    </div>
                ))
            }
            <button onClick={handleClick}>Create Event</button>
            <a href="/home">Back</a>
        </>
    )
}