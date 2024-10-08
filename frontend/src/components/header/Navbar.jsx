import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Company Logo" className="navbar__logo-img" />
        <span className="navbar__name">KVF</span>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "navbar__bar navbar__bar--active" : "navbar__bar"}></span>
        <span className={isMenuOpen ? "navbar__bar navbar__bar--active" : "navbar__bar"}></span>
        <span className={isMenuOpen ? "navbar__bar navbar__bar--active" : "navbar__bar"}></span>
      </div>
      <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <li>
          <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
        </li>
        <li>
          <NavLink to="/products-services" className="navbar__link" activeClassName="navbar__link--active">Product&Services</NavLink>
        </li>
        <li>
          <NavLink to="/updates-acts" className="navbar__link" activeClassName="navbar__link--active">Updates</NavLink>
        </li>
        <li>
          <NavLink to="/insights" className="navbar__link" activeClassName="navbar__link--active">Insights</NavLink>
        </li>
        <li>
          <NavLink to="/case-studies-reports" className="navbar__link" activeClassName="navbar__link--active">Studies & Reports</NavLink>
        </li>
        <li className="navbar__login">
          <NavLink to="/login" className="navbar__link navbar__login-btn">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
