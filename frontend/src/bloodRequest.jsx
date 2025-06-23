import { useEffect, useState } from "react";
import axios from "axios";
import "./bloodRequest.css"
import { useNavigate } from "react-router-dom";


export default function BloodRequest() {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/req/showBloodRequests");
                setRequests(res.data);
            } catch (err) {
                console.error("Error fetching blood requests:", err);
            }
        };
        fetchRequests();
    }, []);

    const handleNewRequest = () => {
        navigate("/makeRequest");
    };

    return (
        <div>
            <h1>Open Blood Requests</h1>
            <button onClick={handleNewRequest}>Make a Request</button>
            <div className="requests-list">
                {requests.length > 0 ? (
                    requests.map((req, index) => (
                        <div className="request-card" key={index}>
                            <h3>{req.patientName} ({req.bloodGroup})</h3>
                            <p>Age: {req.age}</p>
                            <p>Gender: {req.gender}</p>
                            <p>Needed By: {new Date(req.requiredDate).toLocaleDateString()}</p>
                            <p>Hospital: {req.hospitalName}, {req.hospitalLocation}</p>
                            <p>Contact Person: {req.contactPerson.name} ({req.contactPerson.relationship})</p>
                            <p>Contact No: {req.contactPerson.contact}</p>
                            <p>Posted On: {new Date(req.postedOn).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No blood requests found.</p>
                )}
            </div>
            <a href="/home">Back</a>
        </div>
    );
}
