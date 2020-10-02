import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Card, CardGroup, Pagination } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";
import { JobFeedC } from "../component/jobFeedC";

// Importing styles*/
import "../../styles/components.scss";

// Importing views*/
import { LogIn } from "../views/jobFeed";

export const PaginationC = ({ jobPerPage, totalJob }) => {
	const [job, setJob] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const { store, actions } = useContext(Context);

	const indexOfLastJob = currentPage * jobPerPage;
	const indexOfFirstJob = indexOfLastJob - jobPerPage;
	const currentJob = job.slice(indexOfFirstJob, indexOfLastJob);

	const pageNumbers = [1, 2, 3];

	for (let i = 1; i <= Math.ceil(totalJob / jobPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a href="#" className="page-link">
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

PaginationC.propTypes = {
	jobPerPage: PropTypes.number,
	totalJob: PropTypes.number
};
