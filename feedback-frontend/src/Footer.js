import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Puja Enterprises. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
