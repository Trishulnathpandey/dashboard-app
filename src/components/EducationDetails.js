
import React, { useState } from 'react';
import { FaUniversity, FaSave, FaRedo } from 'react-icons/fa';

const EducationDetails = () => {
  const [education, setEducation] = useState({
    degree: '',
    institution: '',
    year: '',
  });

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Education Details:', education);
  };

  const handleReset = () => {
    setEducation({
      degree: '',
      institution: '',
      year: '',
    });
  };

  return (
    <form className="education-details-form" onSubmit={handleSubmit}>
      <div>
        <label><FaUniversity /> Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="Enter degree"
          value={education.degree}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Institution</label>
        <input
          type="text"
          name="institution"
          placeholder="Enter institution"
          value={education.institution}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type="text"
          name="year"
          placeholder="Enter graduation year"
          value={education.year}
          onChange={handleChange}
        />
      </div>
      <div className="form-buttons">
        <button type="submit"><FaSave /> Save and Continue</button>
        <button type="button" onClick={handleReset}><FaRedo /> Reset</button>
      </div>
    </form>
  );
};

export default EducationDetails;
