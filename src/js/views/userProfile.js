import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.scss";
import ReactBootstrap, { Jumbotron, Container, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export const UserProfile = () => {
	const { store, actions } = useContext(Context);
	const user = store.currentUser;

	return (
		<Fragment>
			<div className="userProfile-wraper">
				<div className="userProfile-container d-flex align-items-center">
					{/* Profile photo */}
					<img className="userProfile-img" src="https://i.imgur.com/EnZp8Yp.jpg"></img>
					<div className="userProfile-intro">
						{/* Name */}
						<h1 className="userProfile-name">
							{user.first_name} {user.last_name}
						</h1>
						{/* Specialty*/}
						{/* <h5 className="userProfile-job-title">Plumber</h5> */}
						{/* What I do*/}
						{/* <p className="userProfile-about">
                            I install and repair plumbing systems in residential and commercial properties
                        </p> */}

						<hr />
						<div className="userProgile-demographics">
							{/* <div className="userProfile-age d-flex flex-row">
                                <strong className="userProfile-strong">Age: </strong> <p> 24</p>
                            </div> */}
							<div className="userProfile-address d-flex flex-row">
								<strong className="userProfile-strong">Address:</strong>
								<p>
									{user.address},&nbsp;{user.zipcode}
								</p>
							</div>
							<div className="userProfile-email d-flex flex-row">
								<strong className="userProfile-strong">E-Mail: </strong> <p>{user.email}</p>
							</div>
							<div className="userProfile-phone d-flex flex-row">
								<strong className="userProfile-strong">Phone: </strong> <p>{user.phone}</p>
							</div>
							<div className="userProfile-freelance d-flex flex-row">
								<strong className="userProfile-strong">Account: </strong> <p>{user.type_of_user}</p>
							</div>
							<div>
								<Button variant="primary" href="/log-in">
									Log Out
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="userProfile-bottom-banner d-flex                justify-content-center">
					<a href="#" className="fab fa-linkedin-in userProfile-linkedin"></a>
					<a href="#" className="fab fa-instagram userProfile-instagram"></a>
					<a href="#" className="fab fa-facebook-square userProfile-facebook"></a>
					<a href="#" className="fab fa-twitter userProfile-twitter"></a>
					<a href="#" className="fab fa-google-plus-g userProfile-google"></a>
				</div>
				<p className="disclaimer">
					This website contains copyrighted material the use of which has not always been specifically
					authorized by the copyright owner. We are making such material available in our efforts to advance
					understanding of the credit union industry and issues. This constitutes a ‘fair use’ of any such
					copyrighted material as provided for in section 107 of the US Copyright Law. In accordance with
					Title 17 U.S.C. Section 107, the material on this site is distributed. If you wish to use
					copyrighted material from this site for purposes of your own that go beyond ‘fair use’, you must
					obtain permission from the copyright owner.
				</p>
			</div>
		</Fragment>
	);
};
