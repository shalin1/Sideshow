import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav_container'

export default ({currentUser, logout}) => {
  return (
    <header className="nav-container">
      <nav className="nav-left ">
        <div className="nav-link-container">
          <Link to='/'>
            <h3 className="logo">
              Sideshow
            </h3>
          </Link>
        </div>
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
