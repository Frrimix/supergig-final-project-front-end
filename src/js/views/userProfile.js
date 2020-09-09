import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.scss";
import ReactBootstrap, { Jumbotron, Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const UserProfile = () => {
	return (
		<div className="userProfile-wraper">
			<div className="userProfile-container d-flex align-items-center">
				{/* Profile photo */}
				<img
					className="userProfile-img"
					src="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"></img>
				<div className="userProfile-intro">
					{/* Name */}
					<h1 className="userProfile-name">John Smith</h1>
					{/* Specialty*/}
					<h5 className="userProfile-job-title">Plumber</h5>
					{/* What I do*/}
					<p className="userProfile-about">
						I install and repair plumbing systems in residential and commercial properties
					</p>

					<hr />
					<div className="userProgile-demographics">
						<div className="userProfile-age d-flex flex-row">
							<strong className="userProfile-strong">Age: </strong> <p> 24</p>
						</div>
						<div className="userProfile-address d-flex flex-row">
							<strong className="userProfile-strong">Address: </strong>{" "}
							<p>9280 SW 36 Street, Miami, FL 33165</p>
						</div>
						<div className="userProfile-email d-flex flex-row">
							<strong className="userProfile-strong">E-Mail: </strong> <p>epuermas@supergig.com</p>
						</div>
						<div className="userProfile-phone d-flex flex-row">
							<strong className="userProfile-strong">Phone: </strong> <p>305-423-3800</p>
						</div>
						<div className="userProfile-freelance d-flex flex-row">
							<strong className="userProfile-strong">Account: </strong> <p> Job-Seeker</p>
						</div>
					</div>
				</div>
			</div>
			<div className="userProfile-bottom-banner d-flex justify-content-center">
				<i className="fab fa-linkedin-in userProfile-linkedin"></i>
				<i className="fab fa-instagram userProfile-instagram"></i>
				<i className="fab fa-facebook-square userProfile-facebook"></i>
				<i className="fab fa-twitter userProfile-twitter"></i>
				<i className="fab fa-google-plus-g userProfile-google"></i>
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
