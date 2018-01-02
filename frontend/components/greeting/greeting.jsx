import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Sign Out</button>
  </div>
);

const sessionLinks = () => (
  <div>
    <Link to="/signin">Sign In</Link>
    <br/>
    <Link to="/signup">Sign Up!</Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
