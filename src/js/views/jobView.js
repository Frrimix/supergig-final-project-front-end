import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Dropdown, DropdownButton, Form, FormControl, Button } from "react-bootstrap";
import "../../styles/jobView.scss";
import { JobViewC } from "./../component/jobViewC";
import { PaginationC } from "../component/pagination";

export const JobView = () => {
	return (
		<div className="jobView-wrapper">
			<div className="jobView-buttons d-flex justify-content-center">
				<Form.Control className="jobView-zipcode-search" type="text" placeholder="Enter your zipcode" />
				<Button className="jobView-zipcode-search-button" href="#">
					Search
				</Button>
				<DropdownButton id="dropdown-button" title="Sort by">
					<Dropdown.Item href="#/action-1">Closest Location</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Highest Paying</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Most Recent</Dropdown.Item>
				</DropdownButton>
			</div>
			<div className="jobView-container d-flex justify-content-center ">
				<JobViewC />
			</div>
			<div className="jobView-pagination d-flex justify-content-center">
				<PaginationC />
			</div>
		</div>
	);
};
