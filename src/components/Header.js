import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styless.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here, like clearing user data or tokens

    // Redirect to login page
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
