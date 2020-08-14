import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<div className="navbar-container">
			<nav className="navbar navbar-expand-lg navbar-light">
				{/* Company Logo */}
				<img className="company-logo" src={companyLogo} href="#" />

				{/* Dropdown Menu */}
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#dropdown-menu"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Menu
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

// <nav className="navbar navbar-light bg-light mb-3">
// 	<Link to="/">
// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 	</Link>
// 	<div className="ml-auto">
// 		<Link to="/demo">
// 			<button className="btn btn-primary">Check the Context in action</button>
// 		</Link>
// 	</div>
// </nav>
