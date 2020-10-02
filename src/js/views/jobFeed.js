import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Dropdown, DropdownButton, Form, FormControl, Button } from "react-bootstrap";
import "../../styles/jobFeed.scss";
import { JobFeedC } from "../component/jobFeedC";
import { PaginationC } from "../component/pagination";

export const JobFeed = () => {
	const [job, setJob] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [jobPerPage, setJobPerPage] = useState(3);
	const { store, actions } = useContext(Context);

	const indexOfLastJob = currentPage * jobPerPage;
	const indexOfFirstJob = indexOfLastJob - jobPerPage;
	const currentJob = job.slice(indexOfFirstJob, indexOfLastJob);

	return (
		<div className="jobFeed-wrapper">
			<div className="jobFeed-buttons d-flex justify-content-center">
				<Form.Control className="jobFeed-zipcode-search" type="text" placeholder="Enter your zipcode" />
				<Button className="jobFeed-zipcode-search-button" href="#">
					Search
				</Button>
				<DropdownButton id="dropdown-button" title="Sort by">
					<Dropdown.Item href="#/action-1">Closest Location</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Highest Paying</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Most Recent</Dropdown.Item>
				</DropdownButton>
			</div>
			<div className="jobFeed-container d-flex justify-content-center ">
				<JobFeedC job={currentJob} loading={loading} />
			</div>
			<div className="jobFeed-pagination d-flex justify-content-center">
				<PaginationC jobPerPage={jobPerPage} totalJob={job.length} />
			</div>
		</div>
	);
};
