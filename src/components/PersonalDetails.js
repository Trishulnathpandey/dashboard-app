
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaSave, FaRedo, FaCamera } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io'; // Logo icon

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    profileImage: null, // For profile image
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      profileImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      profileImage: null,
    });
  };

  return (


<form className="personal-details-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>Personal Details</h2>
        </div>

        <div className="form-header-buttons" style={{ marginLeft: 'auto', display: 'flex' }}>
          <button type="submit"><FaSave /> Save and Continue</button>
          <button type="button" onClick={handleReset}><FaRedo /> Reset</button>
        </div>
      </div>

      {/* Profile Image Upload - Moved Below Personal Details heading */}
      <div className="profile-section">
        <label htmlFor="profileImage" className="profile-label">
          {formData.profileImage ? (
            <img src={formData.profileImage} alt="Profile Preview" className="profile-preview" />
          ) : (
<FaUser className="profile-icon" style={{ borderRadius: '50%', background: '#f0f0f0', padding: '10px' }} />
          )}
        </label>
        <input
          type="file"
          id="profileImage"
          name="profileImage"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        
      </div>

      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          placeholder="Enter middle name"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label><FaEnvelope /> Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label><FaPhone /> Mobile Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter mobile number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default PersonalDetails;

