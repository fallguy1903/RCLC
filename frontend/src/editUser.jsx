import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const { id } = useParams();

  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");


  useEffect(() => {
    async function getMember() {
      try {
        const response = await axios.get(`http://localhost:5000/api/modify/getUser/${id}`);
        const user = response.data;
        setMemberId(user.memberId);
        setPassword(user.password);
        setMobile(user.mobile);
        setFullName(user.fullName);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }
    getMember();
  }, [id]);


  async function handleUpdate() {
    try {
      await axios.put(`http://localhost:5000/api/modify/editUser/${id}`, {
        password,
        mobile,
        fullName
      });
      alert("User updated successfully!");
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Error updating user");
    }
  }

  return (
    <>
      <h2>Edit User: {id}</h2>
      <div>
        <input type="text" value={memberId} disabled placeholder="memberId" />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </>
  );
}
