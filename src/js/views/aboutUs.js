import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/aboutUs.scss";
import companyLogo from "../../img/supergig-logo.png";

export const AboutUs = () => {
	return (
		// About us container
		<div className="aboutUs-container">
			{/* About us title */}
			<h3 className="aboutUs-title">About Us</h3>
			<div className="aboutUs-header d-flex justify-content-center">
				{/* About us description */}
				<p className="aboutUs-text">
					<span style={{ color: "#38B553" }}>SuperGig</span> started as an idea by a group of Web Developers.
					We were all a part of a coding bootcamp during the summer of 2020. We are a group of different
					people with the same common purpose #LearnToCode. Together we collaborate to make this Project a
					reality. As you may know COVID-19 was rampant during this time of the year. Many of us had friends
					and/or family members lose their jobs due to the pandemic.
					<br />
					<br />
					This fueled our idea and drove us to create a web-app where anyone could log-in, post short-terms
					jobs that they needed assistance with. Also, those looking for jobs, after being pre-qualified,
					could post their job-skills, offer their services to the public, and be hired by anyone who may need
					such service. This theory seemed to work great because many members of the community are struggling
					during these times, any small job that they can complete will benefit themselves as well as their
					family. Also, many community-members might not have the funds to hire a company that will
					potentially charge hundreds of dollars for a simple job which their neighbor could possibly do for
					less.
					<br />
					<br />
					<span style={{ color: "#38B553" }}>SuperGig</span> is from the community and for the community.
				</p>
			</div>
			{/* About us creators title */}
			<h3 className="aboutUs-creators-title">Meet The Developers</h3>
			<div className="aboutUs-creators-photos d-flex justify-content-around">
				{/* About us creators image, name, and description */}
				{/* About us - creator #1*/}
				<div className="aboutUs-creator-one">
					<img className="aboutUs-creator-one-img" src="https://i.imgur.com/ua8p0aG.jpg" />
					<h5 className="aboutUs-creator-one-name">Fritzlet Jean Louis</h5>
					<p className="aboutUs-creator-one-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor blandit enim, dapibus
						ornare diam mattis vel. Maecenas imperdiet vulputate sem, ac luctus neque commodo in. Quisque
						sodales purus sit amet sapien ultrices varius. Integer maximus, purus non interdum sollicitudin,
						tellus arcu malesuada nulla, sed elementum leo orci sed enim.
					</p>
				</div>
				{/* About us - creator #2*/}
				<div className="aboutUs-creator-two">
					<img className="aboutUs-creator-two-img" src="https://i.imgur.com/VRn80IA.jpg" />
					<h5 className="aboutUs-creator-two-name">Paola Castro</h5>
					<p className="aboutUs-creator-two-description">
						I am a mother of two, I studied Advertising and have worked in Marketing ever since. I became
						interested in coding by seeing my brother code. A dear friend once told me that if I knew Excel
						I could learn. From that day the story changed, I now love coding! It has cost me a lot of work,
						time, and sacrifices but I will not be content until I achieve my goal. For this, I must
						constantly keep learning and practicing, the only thing I must do is believe in myself. I was
						the least technological person in the world so if I can do it anyone can.
					</p>
				</div>
				{/* About us - creator #3*/}
				<div className="aboutUs-creator-three">
					<img className="aboutUs-creator-three-img" src="https://i.imgur.com/FApdZxa.jpg " />
					<h5 className="aboutUs-creator-three-name">Ernesto Milanes</h5>
					<p className="aboutUs-creator-three-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor blandit enim, dapibus
						ornare diam mattis vel. Maecenas imperdiet vulputate sem, ac luctus neque commodo in. Quisque
						sodales purus sit amet sapien ultrices varius. Integer maximus, purus non interdum sollicitudin,
						tellus arcu malesuada nulla, sed elementum leo orci sed enim.
					</p>
				</div>
			</div>
			{/* About us - Company Logo */}
			<div className="aboutUs-company-logo-container d-flex justify-content-center">
				<img className="aboutUs-company-logo" src={companyLogo} href="#" />
			</div>
		</div>
	);
};
