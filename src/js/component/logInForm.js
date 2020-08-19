import React from "react";
import ReactBootstrap, { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { LogIn } from "../views/logIn";

// Importing styles*/
import "../../styles/components.scss";

export const LogInForm = () => {
	return (
		<div className="logInForm-container">
			{/* Image container - L hand side */}
			<div className="logIn-second-container d-flex justify-content-around">
				<img
					className="logInForm-img"
					src="https://image.freepik.com/free-vector/vector-illustration-woman-sitting-front-computer-working-project-searching-chating_101484-63.jpg"
				/>
				{/* Log-in Form - R hand side */}
				<Form>
					<h1 className="d-flex justify-content-center">Log-In</h1>
					<br />
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember Me" />
					</Form.Group>
					<Button className="submit-button" variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>

			{/* Create Account Link */}
			<Link to={"/create-account"} href="#">
				<a className="logInForm-create-account">Create an account</a>
			</Link>
		</div>
	);
};
