import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";
import "../../styles/navbar.scss";
import "../../styles/jumbotron.scss";

export const Jumbotron = () => {
	return (
        <div className="home-container d-flex justify-content-center">
			<div className="jumbotron jumbotron-fluid">
				<div className="jumbotron-container d-flex justify-content-center">
					<h1 className="jumbotron-header">WELCOME TO SUPERGIG</h1>
					{/* <p className="jumbotron-text">With Supergig you will be able to...</p> */}
				</div>
			</div>
		</div>
    );
};