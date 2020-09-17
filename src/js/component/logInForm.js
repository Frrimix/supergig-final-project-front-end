import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import ReactBootstrap, { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { LogIn } from "../views/logIn";

// Importing styles*/
import "../../styles/components.scss";

export const LogInForm = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	return (
		<div className="logInForm-container">
			{/* Image container - L hand side */}
			<div className="logIn-second-container d-flex justify-content-around">
				<img className="logInForm-img" src="https://i.imgur.com/Zvp3ZAV.jpg" />
				{/* Log-in Form - R hand side */}
				<Form>
					<h1 className="d-flex justify-content-center">Log-In</h1>
					<br />
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							type="email"
							placeholder="Enter email"
						/>
						<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</Form.Group>
					<a className="logInForm-forgotPassword" href="#">
						Forgot Password
					</a>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember Me" />
					</Form.Group>
					<Button
						to={"/user-profile"}
						className="submit-button"
						variant="primary"
						type="submit"
						onClick={() => actions.login(email, password)}>
						Submit
					</Button>
				</Form>
			</div>
			<Link to={"/create-account"} href="#">
				<a className="logInForm-create-account">Create an account</a>
			</Link>
		</div>
	);
};
