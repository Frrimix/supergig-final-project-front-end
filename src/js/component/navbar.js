import React, { useContext } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";
import { Context } from "../store/appContext";
// Importing views*/
import { JobFeed } from "../views/jobFeed";
import { AboutUs } from "../views/aboutUs";
import { Home } from "../views/home";
import { LogIn } from "../views/logIn";

// Importing styles*/
import "../../styles/components.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			{/* This is the company logo, clicking it takes you to the home-page */}
			<Link to={"/"}>
				<img className="company-logo" src={companyLogo} href="#" />
			</Link>
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
				<div className="col-10 text-right d-md-none">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>

				<ul className="navbar-nav">
					<li className="nav-item active">
						{/* This is the Home link on the navbar, clicking it takes you to the home page view */}
						<Link to={"/"} className="nav-link" href="#">
							Home
						</Link>
					</li>
					<li className="nav-item">
						{/* This is the Jobs link on the navbar, clicking it takes you to the job feed view */}
						<Link to={"/jobs"} className="nav-link" href="#">
							Jobs
						</Link>
					</li>
					<li className="nav-item">
						{/* This is the About Us link on the navbar, clicking it takes you to the about us view */}
						<Link to={"/about-us"} className="nav-link" href="#">
							About Us
						</Link>
					</li>
					<li className="nav-item">
						<div className="ml-auto">
							{store.token != undefined ? (
								<Link to={"/log-in"} className="nav-link" onClick={() => actions.logout()} href="#">
									Log Out
								</Link>
							) : (
								<Link to={"/log-in"} className="nav-link" href="#">
									Log In
								</Link>
							)}
						</div>
					</li>
					<li>
						{/* This is the User icon on the navbar, clicking it takes you to the log in view */}
						<Link className="nav-link" to={store.token != null ? "/user-profile" : "/log-in"}>
							<i className="nav-link fas fa-user-circle"></i>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
