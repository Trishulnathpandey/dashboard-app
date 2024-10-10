import React, { useState } from 'react';
import { FaLanguage, FaSave, FaRedo } from 'react-icons/fa';

const Languages = () => {
  const [language, setLanguage] = useState('');

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Language:', language);
  };

  const handleReset = () => {
    setLanguage('');
  };

  return (
    <form className="languages-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaLanguage style={{ fontSize: '30px', marginRight: '10px' }} />
          <h2>Languages</h2>
        </div>
        <div className="form-header-buttons" style={{ marginLeft: 'auto', display: 'flex' }}>
          <button type="submit"><FaSave /> Save and Continue</button>
          <button type="button" onClick={handleReset}><FaRedo /> Reset</button>
        </div>
      </div>

      <div>
        <label>Language</label>
        <input
          type="text"
          name="language"
          placeholder="Enter language"
          value={language}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Languages;
