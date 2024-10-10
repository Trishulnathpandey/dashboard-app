import React, { useState } from 'react';
import { FaCertificate, FaSave, FaRedo } from 'react-icons/fa';

const Certifications = () => {
  const [certification, setCertification] = useState('');

  const handleChange = (e) => {
    setCertification(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Certification:', certification);
  };

  const handleReset = () => {
    setCertification('');
  };

  return (
    <form className="certifications-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCertificate style={{ fontSize: '30px', marginRight: '10px' }} />
          <h2>Certifications</h2>
        </div>
        <div className="form-header-buttons" style={{ marginLeft: 'auto', display: 'flex' }}>
          <button type="submit"><FaSave /> Save and Continue</button>
          <button type="button" onClick={handleReset}><FaRedo /> Reset</button>
        </div>
      </div>

      <div>
        <label>Certification</label>
        <input
          type="text"
          name="certification"
          placeholder="Enter certification"
          value={certification}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Certifications;
