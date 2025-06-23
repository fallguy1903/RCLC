// src/pages/MakeRequest.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./makeRequest.css";

export default function MakeRequest() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    requiredDate: "",
    contactPerson: {
      name: "",
      relationship: "",
      contact: "",
    },
    hospitalName: "",
    hospitalLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.contactPerson) {
      setFormData({
        ...formData,
        contactPerson: {
          ...formData.contactPerson,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/req/bloodRequest", formData);
      alert("Request submitted successfully!");
      navigate("/bloodRequest");
    } catch (error) {
      console.error("Error submitting request", error);
      alert("Failed to submit request.");
    }
  };

  return (
    <div className="form-container">
      <h2>Make a Blood Request</h2>
      <form onSubmit={handleSubmit} className="request-form">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group (e.g., O+)"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="requiredDate"
          value={formData.requiredDate}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Contact Person Name"
          value={formData.contactPerson.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="relationship"
          placeholder="Relationship"
          value={formData.contactPerson.relationship}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contactPerson.contact}
          onChange={handleChange}
          pattern="^[6-9]\d{9}$"
          required
        />

        <input
          type="text"
          name="hospitalName"
          placeholder="Hospital Name"
          value={formData.hospitalName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="hospitalLocation"
          placeholder="Hospital Location"
          value={formData.hospitalLocation}
          onChange={handleChange}
        />

        <button type="submit">Submit Request</button>
      </form>
      <a href="/bloodRequest">Back</a>
    </div>
  );
}
