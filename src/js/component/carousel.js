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
const firstPhoto =
	"https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80";

const secondPhoto =
	"https://images.unsplash.com/photo-1590245637778-819a2ce211da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80";

const thirdPhoto =
	"https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

export function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className="carousel-container">
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{/* First Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={firstPhoto} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>

				{/* Second Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={secondPhoto} alt="Second slide" />
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>

				{/* Third Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={thirdPhoto} alt="Third slide" />
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
