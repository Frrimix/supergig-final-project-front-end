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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor blandit enim, dapibus ornare
					diam mattis vel. Maecenas imperdiet vulputate sem, ac luctus neque commodo in. Quisque sodales purus
					sit amet sapien ultrices varius. Integer maximus, purus non interdum sollicitudin, tellus arcu
					malesuada nulla, sed elementum leo orci sed enim. Sed scelerisque tincidunt metus. Nam sit amet ante
					at dolor bibendum tempor a ut dolor. Nullam non neque accumsan, egestas justo vitae, eleifend sem.
					Proin id ipsum leo. Proin eget purus et justo dictum dapibus a eu mauris. Morbi luctus, sapien vitae
					sagittis pellentesque, turpis purus egestas diam, quis dapibus enim tellus sit amet justo. Donec
					ornare maximus turpis, in tincidunt metus hendrerit et. Mauris ullamcorper tortor turpis, sit amet
					sollicitudin lacus rhoncus a. Quisque posuere ligula nec elementum pretium. Interdum et malesuada
					fames ac ante ipsum primis in faucibus.
				</p>
			</div>
			{/* About us creators title */}
			<h3 className="aboutUs-creators-title">Meet The Developers</h3>
			<div className="aboutUs-creators-photos d-flex justify-content-around">
				{/* About us creators image, name, and description */}
				{/* About us - creator #1*/}
				<div className="aboutUs-creator-one">
					<img className="aboutUs-creator-one-img" src="https://i.imgur.com/FApdZxa.jpg" />
					<h5 className="aboutUs-creator-one-name">Ernesto Milanes</h5>
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
						interested in coding by seeing my brother and a dear friend once told me that if I knew Excel I
						could learn. From that day the story changed because I Love Coding! It has cost me a lot of
						work, time and sacrifices but I will not be done until I achieve it. For this, you must
						constantly keep learning and practicing, the only thing you must do is believe in yourself. I
						was the least technological person in the world and if I can anyone can.
					</p>
				</div>
				{/* About us - creator #3*/}
				<div className="aboutUs-creator-three">
					<img className="aboutUs-creator-three-img" src="https://i.imgur.com/ua8p0aG.jpg" />
					<h5 className="aboutUs-creator-three-name">Fritzlet Jean Louis</h5>
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
