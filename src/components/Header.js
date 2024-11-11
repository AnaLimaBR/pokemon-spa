// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="Pokemon Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/list" className="nav-link">Pokémon List</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
