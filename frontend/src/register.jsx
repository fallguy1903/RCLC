import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Register(){
    const navigate = useNavigate();
    const [memberId,setMemberId] = useState('');
    const [password,setPassword] = useState('');
    const [mobile,setMobile] = useState('');
    const [fullName,setFullName] = useState('');
    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        try {
            
            const res = axios.post("http://localhost:5000/api/auth/register",{memberId,password,mobile,fullName})
            if(res.status===200 && !res.status.error)
            {
                console.log(res);
                navigate('/home'); 
            }
            else
                console.log("Enter valid credentials")           
        } catch (error) {
            console.log("wrong credentials")
        }


    }

    return(
        <>
            <div>
                <input type="text" placeholder="memberId" onChange={(e)=>{setMemberId(e.target.value)}} />
                <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
                <input type="text" placeholder="mobile" onChange={(e)=>{setMobile(e.target.value)}} />
                <input type="text" placeholder="fullName" onChange={(e)=>{setFullName(e.target.value)}} />
                <button onClick={handleSubmit}>Register</button>
            </div>
        </>
    )
}