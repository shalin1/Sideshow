import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav_container';

export default ({ currentUser, logout }) => {
	return (
		<footer className="footer-container">
			<nav className="footer-link-container">
				<a href="https://github.com/shalin1/sideshow">
					<i className="fa fa-github fa-2x footer-icon" aria-hidden="true" />
				</a>
				<Link to="/">
					<i
						className="fa fa-linkedin-square fa-2x footer-icon"
						aria-hidden="true"
					/>
				</Link>
			</nav>
		</footer>
	);
};
