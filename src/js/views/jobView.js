import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactBootstrap, { Button } from "react-bootstrap";
import "../../styles/jobView.scss";
import SimpleMap, { MapContainer } from "./../component/googleMaps";
import SimpleMapSingle from "../component/googleMapsSingle";
import PropTypes from "prop-types";

export const JobView = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jobView-container">
			<div className="jobView-wrapper">
				<h1 className="jobView-title">Job Title</h1>
				<hr />
				<p className="jobView-description">
					The faucet on my kitchen has been leaking for the past few days. My husband has tried tightening all
					the bolts and screws he could find but no avail. We recently moved into this home and do not have
					any money to hire a professional plumber. If anybody has plumbing experience and can do this job for
					$100 I would appreciate it. We would buy all necessary parts.
				</p>
				<p className="jobView-address">1102 SW 105 Ave, Miami, FL 33174</p>
				<SimpleMapSingle />
				<br />
				<Link to={"/jobs"} className="d-flex justify-content-center" href="#">
					<a className="jobView-return">Return to jobs</a>
				</Link>
			</div>
		</div>
	);
};
