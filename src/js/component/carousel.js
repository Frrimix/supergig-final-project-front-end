import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Carousel } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { Home } from "../views/home";

// Importing styles*/
import "../../styles/components.scss";

// Declaring variables for photos in carousel*/
const firstPhoto = "https://i.imgur.com/zfGVMgi.jpg";

const secondPhoto = "https://i.imgur.com/PxOr4HM.png";

const thirdPhoto = "https://i.imgur.com/g5WppRD.jpg";

// https://i.imgur.com/In2JHMQ.jpg

export function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className="carousel-container d-block w-100">
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{/* First Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={firstPhoto} alt="First slide" />
					<Carousel.Caption>
						<div className="caption-background">
							<h3>Welcome to SuperGig</h3>
							<p>We connect members of your community who need help with a job or are looking to work.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>

				{/* Second Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={secondPhoto} alt="Second slide" />
					<Carousel.Caption>
						<div className="caption-background">
							<h3>Hassle-Free</h3>
							<p>We make the process of finding the right local person for your job easy.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>

				{/* Third Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={thirdPhoto} alt="Third slide" />
					<Carousel.Caption>
						<div className="caption-background">
							<h3>Growing Community</h3>
							<p>
								With our growing community you will be sure to find the right person for your job or the
								right job for your expertise.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
