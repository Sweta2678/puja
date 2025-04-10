import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="logo-placeholder">PUJA ENTERPRISES</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/feedbacks">Feedbacks</Link>
      </nav>
    </header>
  );
}

export default Header;
