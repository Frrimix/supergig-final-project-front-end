import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Dropdown, DropdownButton, Form, FormControl, Button } from "react-bootstrap";
import "../../styles/jobView.scss";
import { JobFeedC } from "./../component/jobFeedC";
import { PaginationC } from "../component/pagination";

export const JobView = () => {
	return (
		<div className="jobView-wrapper">
			<p>This is the single-job view</p>
		</div>
	);
};
