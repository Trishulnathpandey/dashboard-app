import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerDetails = () => {
  const [formData, setFormData] = useState({
    employerName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employer Details:', formData);
    // After saving, navigate to the next form (adjust according to your routing structure)
    navigate('/next-form'); // Replace with your actual next route
  };

  return (
    <form className="employer-details-form" onSubmit={handleSubmit}>
      <h2>Employer Details</h2>
      <div>
        <label>Employer Name</label>
        <input
          type="text"
          name="employerName"
          placeholder="Enter employer name"
          value={formData.employerName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Enter job title"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job Description</label>
        <textarea
          name="description"
          placeholder="Describe your job responsibilities"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-header-buttons">
        <button type="submit">Save and Continue</button>
        <button type="button" onClick={() => navigate('/next-form')}>
          Skip
        </button>
      </div>
    </form>
  );
};

export default EmployerDetails;
