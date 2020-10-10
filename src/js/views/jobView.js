import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Button } from "react-bootstrap";
import "../../styles/jobView.scss";
import SimpleMap, { MapContainer } from "./../component/googleMaps";
import SimpleMapSingle from "../component/googleMapsSingle";
import PropTypes from "prop-types";
import companyLogo from "../../img/supergig-logo.png";

export const JobView = () => {
	const { store, actions } = useContext(Context);
	let { jobID } = useParams();

	let job = store.job.find(job => job.id === Number(jobID));
	// .filter(job => {
	// 	console.log("job id / jobID", job.id, jobID);
	// 	return job.id === jobID;
	// })[0];

	let address = job && `${job.job_address} ${job.job_city}, ${job.job_state} ${job.job_zipcode}`;

	if (store.token == null) {
		return (
			<h2
				style={{
					textAlign: "center",
					marginTop: "300px",
					marginBottom: "300px"
				}}>
				You must log-in to view job description
				<br />
				<br />
				<Link className="jobView-logIn" to="/log-in">
					Click here to log-in
				</Link>
				<br />
				<br />
				<img className="aboutUs-company-logo" src={companyLogo} href="#" />
			</h2>
		);
	}

	return (
		<div className="jobView-container">
			<div className="jobView-wrapper">
				<h1 className="jobView-title">{job && job.job_title}</h1>
				<hr />
				<p className="jobView-description">{job && job.job_description}</p>
				<p className="jobView-payment"> 💰&nbsp;Payment: ${job && job.job_payment}</p>
				<p className="jobView-address">📍&nbsp;{job && address}</p>
				{address !== "" && <SimpleMapSingle address={address} />}
				<br />
				<Link to={"/jobs"} className="d-flex justify-content-center" href="#">
					<a className="jobView-return">Return to jobs</a>
				</Link>
			</div>
		</div>
	);
};
