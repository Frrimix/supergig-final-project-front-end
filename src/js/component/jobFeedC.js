import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ReactBootstrap, { Card, CardGroup } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { LogIn } from "../views/jobFeed";

// Importing styles*/
import "../../styles/components.scss";

export const JobFeedC = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="jobFeed-container">
			{store.job &&
				store.job.map((e, index) => (
					<CardGroup key={index}>
						{/* This is sample card one */}
						<Card>
							<a className="card-block stretched-link text-decoration-none" href="/job-view">
								<Card.Body className="jobFeedCard .stretched-link" href="#">
									<Card.Title>{e.job_title}</Card.Title>
									<Card.Text>{e.job_description}</Card.Text>
									<Card.Text>{e.job_address}</Card.Text>
									<Card.Text>{e.job_zipcode}</Card.Text>
								</Card.Body>
							</a>
							<Card.Footer>
								<small className="text-muted">Posted 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				))}
		</div>
	);
};
