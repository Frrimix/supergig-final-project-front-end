import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Card, CardGroup } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { LogIn } from "../views/jobFeed";

// Importing styles*/
import "../../styles/components.scss";

export const JobFeedC = () => {
	return (
		<div className="jobFeed-container">
			<CardGroup>
				{/* This is sample card one */}
				<Card>
					<a className="card-block stretched-link text-decoration-none" href="/job-view">
						<Card.Body className="jobFeedCard .stretched-link" href="#">
							<Card.Title>Need help cutting my grass</Card.Title>
							<Card.Text>
								In need of help cutting my grass. Worker should have tools required to cut a
								medium-sized yard. Lunch will be provided.
							</Card.Text>
							<Card.Text>9280 SW 36 Street, Miami, FL 33165</Card.Text>
							<Card.Text>You will be compensated with $50.</Card.Text>
						</Card.Body>
					</a>
					<Card.Footer>
						<small className="text-muted">Posted 3 mins ago</small>
					</Card.Footer>
				</Card>
				{/* This is sample card two */}
				<Card>
					<a className="card-block stretched-link text-decoration-none" href="/job-view">
						<Card.Body className="jobFeedCard">
							<Card.Title>Need help with a leaky faucet</Card.Title>
							<Card.Text>
								The faucet on my kitchen has been leaking for the past few days. My husband has tried
								tightening all the bolts and screws he could find but no avail. We recently moved into
								this home and do not have any money to hire a professional plumber. We would buy all
								necessary parts.
							</Card.Text>
							<Card.Text>1102 SW 105 Ave, Miami, FL 33174</Card.Text>
							<Card.Text>You will be compensated with $100.</Card.Text>
						</Card.Body>
					</a>
					<Card.Footer>
						<small className="text-muted">Posted 2 hours ago</small>
					</Card.Footer>
				</Card>
				{/* This is sample card three */}
				<Card>
					<a className="card-block stretched-link text-decoration-none" href="/job-view">
						<Card.Body className="jobFeedCard">
							<Card.Title>Need help cleaning my home</Card.Title>
							<Card.Text>
								I was recently involved in a motor-vehicle accident. I injured by left shoulder and
								lower back. Due to my injuries I am not able to clean my home. I am supposed to be in
								bed-rest for approximately 3 weeks per doctors orders. The home has 2 beds and 2 baths,
								approximately 1,200 square-feet.
							</Card.Text>
							<Card.Text>10380 SW 38 Street, Miami, FL 33165</Card.Text>
							<Card.Text>You will be compensated with $100.</Card.Text>
						</Card.Body>
					</a>
					<Card.Footer>
						<small className="text-muted">Posted 2 days ago</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};
