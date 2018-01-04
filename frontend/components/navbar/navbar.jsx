import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav_container'

export default ({currentUser, logout}) => {
  return (
    <header className="nav-container">
      <div className="nav-left">
        <Link to='/'><h3 className="logo">SideShow</h3></Link>
      </div>
      <div className="nav-right">
        <UserNav
          currentUser={currentUser}
          logout={logout}
          className="nav-link"
        />
      </div>

    </header>
  );

};
