// src/components/common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2>Company Logo</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/web-design">Web Design</Link></li>
      <li><Link to="/ui-ux">UI/UX</Link></li>
      <li><Link to="/digital-marketing">Digital Marketing</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
