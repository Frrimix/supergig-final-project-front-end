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
							<Link to="/job-view" className="card-block stretched-link text-decoration-none" href="#">
								<Card.Body className="jobFeedCard .stretched-link" href="#">
									<Card.Title>{e.job_title}</Card.Title>
									<Card.Text>
										<p>{e.job_description}</p>
									</Card.Text>
									<Card.Text>
										<p>
											📍&nbsp;
											{e.job_address}
											&nbsp;
											{e.job_city},&nbsp;
											{e.job_zipcode}
										</p>
									</Card.Text>
									<Card.Text>
										<p>
											💰&nbsp;
											<strong>Payment: ${e.job_payment}</strong>
										</p>
									</Card.Text>
								</Card.Body>
							</Link>
							<Card.Footer>
								<small className="text-muted">Posted 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				))}
		</div>
	);
};
