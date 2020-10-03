import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";

// Importing styles*/
import "../../styles/googleMaps.scss";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 25.7617,
			lng: -80.1918
		},
		zoom: 13
	};

	render() {
		return (
			<div className="google-maps-wrapper">
				{/* // Important! Always set the container height explicitly */}
				<div className="google-maps-container" style={{ height: "400px", width: "500px" }}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: "AIzaSyCjV5S1bkd7RssX1Z7cytvypvQAgchTt8A" }}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}>
						{/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

SimpleMap.propTypes = {
	text: PropTypes.string,
	center: PropTypes.object,
	zoom: PropTypes.number
};

export default SimpleMap;
