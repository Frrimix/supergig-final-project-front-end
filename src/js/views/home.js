import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ControlledCarousel } from "./../component/carousel";

export const Home = () => {
	return (
		<div className="content-wrapper">
			<div className="home-container d-flex justify-content-center">
				<ControlledCarousel />
			</div>
			<div className="home-banner">
				<div className="home-banner-header d-flex justify-content-center">
					<h1>How SuperGig Works For You</h1>
				</div>
				<div className="home-banner-icons d-flex justify-content-center">
					<i className="fas fa-search ico">
						<h3 className="icons-text">Search for jobs</h3>
					</i>
					<i className="fas fa-paste ico">
						<h3 className="icons-text">Search for jobs</h3>
					</i>
					<i className="fas fa-hand-holding-usd ico">
						<h3 className="icons-text">Search for jobs</h3>
					</i>
					<i className="fas fa-comments ico">
						<h3 className="icons-text">Search for jobs</h3>
					</i>
				</div>
			</div>
		</div>
	);
};
