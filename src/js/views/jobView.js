import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/jobView.scss";
import { JobViewC } from "./../component/jobViewC";

export const JobView = () => {
	return (
		<div className="jobView-container d-flex justify-content-center">
			<JobViewC />
		</div>
	);
};
