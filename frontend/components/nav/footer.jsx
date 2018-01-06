import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav_container'

export default ({currentUser, logout}) => {
  return (
    <footer className="footer-container">
      <nav className="footer-link-container">
        <a href='https://github.com/shalin1/sideshow' className="nav-link">
          <i className="fa fa-github fa-3x footer-icon" aria-hidden="true"></i>
        </a>
        <Link to='/' className="nav-link">
          <i className="fa fa-linkedin-square fa-3x footer-icon" aria-hidden="true"></i>
        </Link>


      </nav>
    </footer>
  );
};
