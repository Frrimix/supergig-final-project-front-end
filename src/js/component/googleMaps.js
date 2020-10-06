import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import GoogleMapReact, { Marker } from "google-map-react";

// Importing styles*/
import "../../styles/googleMaps.scss";

const markerStyle = {
	height: "15px",
	width: "15px",
	// backgroundImage: "url('https://i.imgur.com/w49gAO2.png')",
	backgroundColor: "red",
	borderRadius: "50%"
};
// Variable for marker below
const AnyReactComponent = props => <div style={markerStyle}></div>;

AnyReactComponent.propTypes = {
	text: PropTypes.string
};

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 25.7589893,
			lng: -80.3665177
		},
		markers: {
			lat: 25.6862372,
			lng: -80.3486671
		},
		markers: {
			lat: 25.6846475,
			lng: -80.3176725
		},
		zoom: 12
	};

	render() {
		return (
			<div className="google-maps-wrapper">
				{/* // Important! Always set the container height explicitly */}
				<div
					className="google-maps-container"
					style={{
						height: "90%",
						width: "800px",
						marginTop: "100px"
					}}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: "AIzaSyCjV5S1bkd7RssX1Z7cytvypvQAgchTt8A" }}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
						yesIWantToUseGoogleMapApiInternals>
						{/* Marker is located below */}
						<AnyReactComponent lat={this.props.center.lat} lng={this.props.center.lng} />
						<AnyReactComponent lat={this.props.markers.lat} lng={this.props.markers.lng} />
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

SimpleMap.propTypes = {
	center: PropTypes.object,
	markers: PropTypes.any,
	zoom: PropTypes.number
};

export default SimpleMap;
