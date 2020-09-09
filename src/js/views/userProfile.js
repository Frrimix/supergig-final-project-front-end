import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.scss";
import ReactBootstrap, { Jumbotron, Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const UserProfile = () => {
	return (
		<div className="userProfile-container d-flex align-items-center">
			{/* Profile photo */}
			<img
				className="userProfile-img"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcIShEwcUXov24cRg85GkeJXtgcTLJeTRMfw&usqp=CAU"></img>
			<div className="userProfile-intro">
				<h1>John Smith</h1>
				<h5 className="userProfile-job-title">Plumber</h5>

				<p>I install and repair plumbing systems in residential and commercial properties</p>

				<hr />
				<div className="userProgile-demographics">
					<p>Age: 24</p>
					<p>Address: 9280 SW 36 Street, Miami, FL </p>
					<p>E-mail: epuermas@epuermas.com</p>
					<p>Phone: 305-423-3800</p>
					<p>Freelance: Avaliable</p>
				</div>
			</div>
			{/* <div className="userProfile-social">
				<a href="url">Previous Projects</a>
				<a href="url">
					<i className="fas fa-hand-holding-usd ico" />
				</a>
			</div> */}
		</div>
	);
};
