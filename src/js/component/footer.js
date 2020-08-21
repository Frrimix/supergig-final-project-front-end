import React, { Component } from "react";
import { BrowserRouter, Router, Switch, Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing styles*/
import "../../styles/components.scss";

export const Footer = () => (
	<footer className="main-footer">
		<div className="container">
			<div className="row">
				{/* Column 1 */}
				<div className="col">
					<h5>SuperGig</h5>
					<ul className="list-unstyled">
						<li>
							<a className="footer-link" href="/about-us">
								About Us
							</a>
						</li>
						<li>Contact Us</li>
						<li>
							<a
								className="footer-link"
								href="https://github.com/paocastrob/FinalProject"
								rel="noopener noreferrer"
								target="_blank">
								Repository
							</a>
						</li>
					</ul>
				</div>

				{/* Column 2 */}
				<div className="col">
					<h5>Job-Posters</h5>
					<ul className="list-unstyled">
						<li>
							<a className="footer-link" href="/user-profile">
								View Profile
							</a>
						</li>
						<li>
							<a className="footer-link" href="/job-posting">
								Post A Job
							</a>
						</li>
					</ul>
				</div>

				{/* Column 3 */}
				<div className="col">
					<h5>Job-Seekers</h5>
					<ul className="list-unstyled">
						<li>
							<a className="footer-link" href="/user-profile">
								View Profile
							</a>
						</li>
						<li>
							<a className="footer-link" href="/jobs>">
								View Jobs
							</a>
						</li>
					</ul>
				</div>

				{/* Column 4 */}
				<div className="col">
					<h5>Social Media</h5>
					<ul className="list-unstyled">
						<li>
							<i className="social-media-icons fab fa-instagram"></i>
							Instagram
						</li>
						<li>
							<i className="social-media-icons fab fa-facebook-square"></i>
							Facebook
						</li>
						<li>
							<i className="social-media-icons fab fa-twitter-square"></i>
							Twitter
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="row">
				<p className="col-sm">
					&copy;{new Date().getFullYear()} SuperGig Inc. | All Rights Reserved | Terms Of Service | Privacy
				</p>
			</div>
		</div>
	</footer>
);
