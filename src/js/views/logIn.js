import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/logIn.scss";
import { LogInForm } from "../component/logInForm";

export const LogIn = () => {
	return (
		<div className="logIn-wraper">
			<div className="logIn-container d-flex h-100 justify-content-center align-self-center">
				<LogInForm />
			</div>
			<p className="disclaimer">
				This website contains copyrighted material the use of which has not always been specifically authorized
				by the copyright owner. We are making such material available in our efforts to advance understanding of
				the credit union industry and issues. This constitutes a ‘fair use’ of any such copyrighted material as
				provided for in section 107 of the US Copyright Law. In accordance with Title 17 U.S.C. Section 107, the
				material on this site is distributed. If you wish to use copyrighted material from this site for
				purposes of your own that go beyond ‘fair use’, you must obtain permission from the copyright owner.
			</p>
		</div>
	);
};
