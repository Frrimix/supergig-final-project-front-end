import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";
import "../../styles/components.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<img className="company-logo" src={companyLogo} href="#" />
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="nav-link fas fa-user-circle"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
