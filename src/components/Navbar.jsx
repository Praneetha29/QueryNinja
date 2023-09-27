import React, { useState } from 'react';
import TableDropdown from './TableDropdown';
import '../styles/Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }; 

  return (
    <nav className="navbar" id="custom-navbar">
      <div className="d-flex align-items-center">
        <span role="img" aria-label="ninja" className="ninja-emoji">
          🥋
        </span>
        <a className="navbar-brand" href="#">
          QueryNinja- Your SQL Editor
        </a>
      </div>
      
       <TableDropdown />
    </nav>
  );
}

export default Navbar;
