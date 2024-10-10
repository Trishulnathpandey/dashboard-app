

import React, { useState } from 'react';
import { FaFileUpload, FaSave, FaRedo } from 'react-icons/fa';

const Documents = () => {
  const [document, setDocument] = useState(null); // Changed to handle file

  const handleDocumentChange = (e) => {
    setDocument(e.target.files[0]); // Handling file input properly
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document) {
      console.log('Document uploaded:', document.name);
    } else {
      console.log('No document uploaded');
    }
  };

  const handleReset = () => {
    setDocument(null); // Reset document input
    document.getElementById('documentInput').value = ''; // Clear the file input
  };

  return (
    <form className="documents-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Upload Documents</h2>
        <div className="form-header-buttons" style={{ marginLeft: 'auto', display: 'flex' }}>
          <button type="submit"><FaSave /> Save and Continue</button>
          <button type="button" onClick={handleReset}><FaRedo /> Reset</button>
        </div>
      </div>

      <div className="file-upload-section">
        <label htmlFor="documentInput" className="upload-label">
          <FaFileUpload className="upload-icon" /> {document ? document.name : 'Choose a file'}
        </label>
        <input
          type="file"
          id="documentInput"
          name="document"
          accept=".pdf, .doc, .docx, .txt"
          onChange={handleDocumentChange}
          style={{ display: 'none' }} // Hide default file input
        />
        <p>Click to upload a document (PDF, DOC, DOCX, TXT)</p>
      </div>
    </form>
  );
};

export default Documents;
