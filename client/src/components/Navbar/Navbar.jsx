import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Bloggo</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link> 
        </li>
        <li className="nav-item">
          <Link to="/createpost" className="nav-link">Write Blogs</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
