import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import "./manage.css"



export default function Manage(){
    const navigate = useNavigate();
    const [users,setAllUsers] = useState([]);
    useEffect(()=>{async function getUsers(){
        const response = await axios.get("http://localhost:5000/api/modify/getUsers")
        if(response)
        {
            setAllUsers(response.data);
        }
    }getUsers();},[])
    const removeUser = async (memberId)=>{
        const res = await axios.delete(`http://localhost:5000/api/modify/removeUser/${memberId}`)
        console.log(res + "deleted");
    }

    
    return(
        <>
            <h1>Manage Members</h1>
            {
                users.map((val,idx)=>(
                    <div key={val.memberId} className="user-card">
                        <h4>{val.fullName}</h4>
                        <h4>{val.memberId}</h4>
                        <button onClick={()=>{removeUser(val.memberId)}}>Remove</button>
                        <button onClick={()=>{navigate(`/EditUser/${val.memberId}`)}}>Edit</button>
                    </div>
                ))
            }
        </>
    )
}