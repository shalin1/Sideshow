import React from 'react';
import { Link } from 'react-router-dom';
import UserNavContainer from './user_nav_container'

export default ({currentUser, logout}) => {
  return (
    <header className="nav-container">
      <Link to='/'>
        <span className="nav-link font-nav-logo">
          Sideshow
        </span>
      </Link>
      <nav className="nav-right">

        <UserNavContainer
          currentUser={currentUser}
          logout={logout}
        />

        <Link to="/create">
          <div className="font-nav-link-emphasis nav-link">
            Create Event
          </div>
        </Link>

      </nav>
    </header>
  );
};
