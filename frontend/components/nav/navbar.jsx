import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav_container'

export default ({currentUser, logout}) => {
  return (
    <header className="nav-container">
      <nav className="nav-left nav-link-container">
        <Link to='/' className="nav-link"><h3 className="logo">Sideshow</h3></Link>
      </nav>
      <nav className="nav-right">
        <UserNav
          currentUser={currentUser}
          logout={logout}
        />
      </nav>
    </header>
  );
};
