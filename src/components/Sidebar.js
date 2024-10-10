


import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFile, FaGraduationCap, FaCertificate, FaLanguage, FaBriefcase, FaBuilding } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/personal-details" className="sidebar-item">
              <FaUser className="icon" />
              <span>Personal Details</span>
            </Link>
          </li>
          <li>
            <Link to="/documents" className="sidebar-item">
              <FaFile className="icon" />
              <span>Documents</span>
            </Link>
          </li>
          <li>
            <Link to="/education" className="sidebar-item">
              <FaGraduationCap className="icon" />
              <span>Education Details</span>
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="sidebar-item">
              <FaCertificate className="icon" />
              <span>Certifications</span>
            </Link>
          </li>
          <li>
            <Link to="/languages" className="sidebar-item">
              <FaLanguage className="icon" />
              <span>Languages</span>
            </Link>
          </li>
          <li>
            <Link to="/work-experience" className="sidebar-item">
              <FaBriefcase className="icon" />
              <span>Work Experience</span>
            </Link>
          </li>
          <li>
            <Link to="/employer-details" className="sidebar-item">
              <FaBuilding className="icon" />
              <span>Employer Details</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
