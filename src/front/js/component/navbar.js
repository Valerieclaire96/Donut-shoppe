import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img className="navLogo" src="https://cdn.dribbble.com/users/1787323/screenshots/11472576/media/1b4f4c500042352b26b5c99abc455fd5.png?compress=1&resize=400x300"/></span>
				</Link>
				<div className="ml-auto">
				<Link to="/demo">
						<button className="btn btn-info">Contact Us</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-info">Order Now</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
