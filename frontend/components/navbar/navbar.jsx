import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'

export default ({currentUser, logout}) => {
  return (
    <header className="nav-container">
      <div className="nav-left">
        <Link to='/'><h3 className="logo">SideShow</h3></Link>
      </div>
      <div className="rightnav">
        <Link to='/'><h3 className='nav-title'>Browse Events</h3></Link>
        <GreetingContainer
          currentUser={currentUser}
          logout={logout}
        />
        <Link to='/'><h3 className='nav create-event'>Create Event</h3></Link>
      </div>
    </header>
  );

};
