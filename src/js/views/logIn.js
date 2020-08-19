import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/logIn.scss";
import { LogInForm } from "../component/logInForm";

export const LogIn = () => {
	return (
		<div className="logIn-container d-flex h-100 justify-content-center align-self-center">
			<LogInForm />
		</div>
	);
};
