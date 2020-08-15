import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.scss";

export const UserProfile = () => {
	return (
		<div className="userProfile-container d-flex justify-content-center">
			<p>This is the user profile view.</p>
		</div>
	);
};
