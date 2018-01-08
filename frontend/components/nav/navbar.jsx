import React from 'react';
import { Link } from 'react-router-dom';
import UserNavContainer from './user_nav_container'

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
        <div className="nav-link-container">
          <Link to="events/new" className="font-link-emphasis">
            Create Event
          </Link>
        </div>
        <UserNavContainer
          currentUser={currentUser}
          logout={logout}
        />

      </nav>
    </header>
  );
};
