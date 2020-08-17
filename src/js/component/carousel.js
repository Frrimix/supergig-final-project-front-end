import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap from "react-bootstrap";
import { render } from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { Home } from "../views/home";

// Importing styles*/
import "../../styles/components.scss";

export function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
