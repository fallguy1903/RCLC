import axios from "axios"
import "./home.css"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    const handleClick = async (evt)=>{
        const res = axios.post("http://localhost:5000/api/auth/logout");
        console.log(res);
        navigate('/');
    }
    return(
        <>
            <h1>Home Page</h1>
            <div className="nav">
                <a href="/bloodRequest">Blood Requests</a>
                <a href="/events">Events</a>
                <a href="/about">About</a>
            </div>
            
            <br/>
            <button onClick={handleClick}>Logout</button>
        </>
    )
}