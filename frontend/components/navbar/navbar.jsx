import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'

export default ({currentUser, logout}) => {
  return (
    <header className="nav-container">
      <div className="nav-left">
        <Link to='/'><h3 className="logo">SideShow</h3></Link>
      </div>
      <div className="nav-right">
        <GreetingContainer
          currentUser={currentUser}
          logout={logout}
        />
      </div>
    </header>
  );

};
