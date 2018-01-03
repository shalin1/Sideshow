import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

const personalGreeting = (currentUser, logout) => (
  <div>
    <button className="header-button" onClick={logout}>Sign Out</button>
  </div>
);

const sessionLinks = () => (
  <div>
    <Link to="/signin">Sign In</Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
