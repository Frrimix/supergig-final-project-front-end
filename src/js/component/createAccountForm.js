import React from "react";
import ReactBootstrap, { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { CreateAccount } from "../views/createAccount";

// Importing styles*/
import "../../styles/components.scss";

export const CreateAccountForm = () => {
	return (
		<div className="createAccountForm-container">
			{/* Image container - L hand side */}
			<div className="createAccount-second-container d-flex justify-content-around">
				<img
					className="createAccountForm-img"
					src="https://image.freepik.com/free-vector/vector-illustration-woman-sitting-front-computer-working-project-searching-chating_101484-63.jpg"
				/>
				{/* Log-in Form - R hand side */}
				<Form>
					<h1 className="d-flex justify-content-center">Create Account</h1>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control placeholder="First Name" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control placeholder="Last Name" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address</Form.Label>
						<Form.Control placeholder="1234 Main St" />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>State</Form.Label>
							<Form.Control as="select" defaultValue="Choose...">
								<option>Choose...</option>
								<option>...</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridSex">
							<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
								Sex
							</Form.Label>
							<Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
								<option value="0">Choose...</option>
								<option value="1">Male</option>
								<option value="2">Female</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridUser">
							<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
								Type Of User
							</Form.Label>
							<Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
								<option value="0">Choose...</option>
								<option value="1">Job Poster</option>
								<option value="2">Job Seeker</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>

					<br />

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>

			{/* Create Account Link */}
			<Link to={"/create-account"} href="#">
				<a className="logInForm-create-account">Create an account</a>
			</Link>
			<p></p>
		</div>
	);
};
