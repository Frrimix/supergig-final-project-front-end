import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Dropdown, DropdownButton, Form, FormControl, Button } from "react-bootstrap";
import "../../styles/jobFeed.scss";
import { JobFeedC } from "../component/jobFeedC";
import { PaginationC } from "../component/pagination";

export const JobFeed = () => {
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
				<JobFeedC />
			</div>
			<div className="jobFeed-pagination d-flex justify-content-center">
				<PaginationC />
			</div>
		</div>
	);
};
