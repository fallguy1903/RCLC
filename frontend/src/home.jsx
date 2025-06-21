import axios from "axios"
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
            <button onClick={handleClick}>Logout</button>
        </>
    )
}