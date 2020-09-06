import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Dropdown, DropdownButton } from "react-bootstrap";
import "../../styles/jobView.scss";
import { JobViewC } from "./../component/jobViewC";

export const JobView = () => {
	return (
		<div className="jobView-wrapper">
			<DropdownButton className="jobView-button" title="Sort by">
				<Dropdown.Item href="#/action-1">Closest Location</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Highest Paying</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Most Recent</Dropdown.Item>
			</DropdownButton>
			<div className="jobView-container d-flex justify-content-center">
				<JobViewC />
			</div>
		</div>
	);
};
