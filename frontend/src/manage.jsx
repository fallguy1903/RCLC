import axios from "axios"
import { useEffect, useState } from "react"
import "./manage.css"

export default function Manage(){
    const [users,setAllUsers] = useState([]);
    useEffect(()=>{async function getUsers(){
        const response = await axios.get("http://localhost:5000/api/modify/getUsers")
        if(response)
        {
            setAllUsers(response.data);
        }
    }getUsers();},[])
    return(
        <>
            <h1>Manage Members</h1>
            {
                users.map((val,idx)=>(
                    <div key={idx} className="user-card">
                        <h4>{val.fullName}</h4>
                        <h4>{val.memberId}</h4>
                        <a href="Remove">Remove</a>
                        <a href="Edit">Edit</a>
                        <a href="Make Admin">Make Admin</a>
                    </div>
                ))
            }
        </>
    )
}