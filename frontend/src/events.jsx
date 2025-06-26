import { useEffect } from "react"
import axios from "axios";

export default function Events(){
    useEffect(()=>{ async function getAllEvents(){
        try {
            const events = await axios.get("http://localhost:5000/api/event/getEvents");
            if(events)
                console.log(events.data);
            else
                console.log("No events found");    
        } catch (error) {
            console.log("Error fetching events");
        };
        }getAllEvents();},[])
    return(
        <>
            <h1>Events</h1>
        </>
    )
}