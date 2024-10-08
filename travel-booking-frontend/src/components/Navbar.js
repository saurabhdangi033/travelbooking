import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Travel Booking</div>
      <div className="navbar-buttons">
        <Link to="/">
          <button className="navbar-btn">Add Booking</button>
        </Link>
        <Link to="/view-bookings">
          <button className="navbar-btn">View Bookings</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
