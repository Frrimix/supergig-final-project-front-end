import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="home-container d-flex justify-content-center">
			<p>WELCOME TO THE SUPERGIG WEBSITE.</p>
		</div>
	);
};
