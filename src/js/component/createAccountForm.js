import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Form, Button, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { CreateAccount } from "../views/createAccount";

// Importing styles*/
import "../../styles/components.scss";

export const CreateAccountForm = props => {
	let history = useHistory();

	const { store, actions } = useContext(Context);
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [type_of_user, setType_of_user] = useState("");

	return (
		<div className="createAccountForm-container">
			{/* Image container - L hand side */}
			<div className="createAccount-second-container d-flex justify-content-around">
				<div className="createAccountForm-img - container">
					<img className="createAccountForm-img" src="https://i.imgur.com/LiUCr8U.jpg" />
				</div>
				{/* Log-in Form - R hand side */}
				<Form>
					<h1 className="d-flex justify-content-center">Create Account</h1>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								defaultValue={first_name}
								onChange={e => setFirst_name(e.target.value)}
								placeholder="First Name"
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								defaultValue={last_name}
								onChange={e => setLast_name(e.target.value)}
								placeholder="Last Name"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								defaultValue={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								defaultValue={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridConfirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								defaultValue={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address</Form.Label>
						<Form.Control
							defaultValue={address}
							onChange={e => setAddress(e.target.value)}
							placeholder="1234 Main St"
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control defaultValue={zipcode} onChange={e => setZipcode(e.target.value)} />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>Sex</Form.Label>
							<Form.Control as="select" defaultValue="Choose...">
								<option>Choose...</option>
								<option value="1">Male</option>
								<option value="2">Female</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridUser">
							<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
								Type Of User
							</Form.Label>
							<Form.Control
								defaultValue={type_of_user}
								onChange={e => setType_of_user(e.target.value)}
								as="select"
								className="my-1 mr-sm-2"
								id="inlineFormCustomSelectPref"
								custom>
								<option value="0">Choose...</option>
								<option value="1">Job Poster</option>
								<option value="2">Job Seeker</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>
					<Button
						className="submit-button"
						variant="primary"
						type="submit"
						onClick={() => {
							actions.addUser(first_name, last_name, password, email, address, zipcode, type_of_user);
							alert("User account has been created");
						}}>
						Submit
					</Button>
				</Form>
			</div>

			{/* Create Account Link */}
			<Link to={"/log-in"} href="#">
				<a className="createAcountForm-Login">Log-In</a>
			</Link>
		</div>
	);
};
