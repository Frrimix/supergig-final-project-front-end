import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/createAccount.scss";
import { CreateAccountForm } from "../component/createAccountForm";

export const CreateAccount = () => {
	return (
		<div className="createAccount-container d-flex justify-content-center">
			<CreateAccountForm />
		</div>
	);
};
