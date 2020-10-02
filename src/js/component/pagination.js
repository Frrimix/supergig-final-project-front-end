import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Card, CardGroup, Pagination } from "react-bootstrap";
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
	const pageNumbers = [0, 1];

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

		// <div className="pagination-container">
		//     <nav aria-label="Page navigation example">
		//         <ul className="pagination pg-green">
		//             <li className="page-item ">
		//                 <a className="page-link" tabIndex="-1" href="#">
		//                     Previous
		//                 </a>
		//             </li>
		//             <li className="page-item active">
		//                 <a className="page-link" href="#">
		//                     1 <span className="sr-only">(current)</span>
		//                 </a>
		//             </li>
		//             <li className="page-item">
		//                 <a className="page-link" href="#">
		//                     2
		//                 </a>
		//             </li>
		//             <li className="page-item">
		//                 <a className="page-link" href="#">
		//                     3
		//                 </a>
		//             </li>
		//             <li className="page-item">
		//                 <a className="page-link" href="#">
		//                     4
		//                 </a>
		//             </li>
		//             <li className="page-item ">
		//                 <a className="page-link" href="#">
		//                     Next
		//                 </a>
		//             </li>
		//         </ul>
		//     </nav>
		// </div>
	);
};

PaginationC.propTypes = {
	jobPerPage: PropTypes.number,
	totalJob: PropTypes.number
};
