import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();
    const [memberId,setMemberId] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = async(evt)=>{
        evt.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login",{memberId,password});
            console.log(res);
            navigate('/home');    
        } catch (error) {
            console.log("Register before Login")
        }
        
    }
    return(

    <>
    <div className="Login">
        <input type="text" placeholder="MemberId" onChange={(e)=>{setMemberId(e.target.value)}} />
        <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={handleSubmit}>Login</button>
        <a href="/register">Register</a>
    </div>
    </>
)
}