import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
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
	const [job, setJob] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [jobPerPage, setJobPerPage] = useState(3);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		const fetchJob = async () => {
			setLoading(true);
			const res = await axios.get("https://supergig-backend.herokuapp.com/job-post");
			setJob(res.data);
			setLoading(false);
		};

		fetchJob();
	}, []);
	console.log("getting jobs from axios", job);
	// Get current jobs
	const indexOfLastJob = currentPage * jobPerPage;
	const indexOfFirstJob = indexOfLastJob - jobPerPage;
	const currentJob = job.slice(indexOfFirstJob, indexOfLastJob);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className="jobFeed-container">
			{job.map(job => (
				<CardGroup key={job.id}>
					{/* This is sample card one */}
					<Card>
						<Link
							to={`/job-view/${job.id}`}
							className="card-block stretched-link text-decoration-none"
							href="#">
							<Card.Body className="jobFeedCard .stretched-link" href="#">
								<Card.Title>{job.job_title}</Card.Title>
								<Card.Text>
									<p>{job.job_description}</p>
								</Card.Text>
								<Card.Text>
									<p>
										📍&nbsp;
										{job.job_address}
										&nbsp;
										{job.job_city},&nbsp;
										{job.job_zipcode}
									</p>
								</Card.Text>
								<Card.Text>
									<p>
										💰&nbsp;
										<strong>Payment: ${job.job_payment}</strong>
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
