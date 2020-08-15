import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/jobPosting.scss";

export const JobPosting = () => {
	return (
		<div className="jobPosting-container d-flex justify-content-center">
			<p>This is the job posting.</p>
		</div>
	);
};
