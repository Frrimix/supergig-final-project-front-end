import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Card, CardGroup, Pagination } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing styles*/
import "../../styles/components.scss";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
			{number}
		</Pagination.Item>
	);
}

export const PaginationC = () => {
	return (
		<div className="pagination-container">
			<Pagination>{items}</Pagination>
		</div>
	);
};
