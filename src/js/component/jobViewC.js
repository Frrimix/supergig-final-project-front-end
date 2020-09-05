import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Card, CardGroup } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing styles*/
import "../../styles/components.scss";

export const JobViewC = () => {
	return (
		<div className="jobView-container">
			<CardGroup>
				{/* This is sample card one */}
				<Card>
					<Card.Body>
						<Card.Title>Job Title</Card.Title>
						<Card.Text>This is the job description</Card.Text>
						<Card.Text>This is the job address</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				{/* This is sample card two */}
				<Card>
					<Card.Body>
						<Card.Title>Job Title</Card.Title>
						<Card.Text>This is the job description</Card.Text>
						<Card.Text>This is the job address</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				{/* This is sample card three */}
				<Card>
					<Card.Body>
						<Card.Title>Job Title</Card.Title>
						<Card.Text>This is the job description</Card.Text>
						<Card.Text>This is the job address</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};
