
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PersonalDetails from './components/PersonalDetails';
import Documents from './components/Documents';
import EducationDetails from './components/EducationDetails';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import WorkExperience from './components/WorkExperience';
import EmployerDetails from './components/EmployerDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/education" element={<EducationDetails />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/employer-details" element={<EmployerDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
