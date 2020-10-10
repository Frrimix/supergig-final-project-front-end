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
			lat: 25.7268,
			lng: -80.3553
		},
		markers: {
			lat: 25.6862372,
			lng: -80.3486671
		},
		markers1: {
			lat: 25.6846475,
			lng: -80.3176725
		},
		markers2: {
			lat: 25.736229,
			lng: -80.3474447
		},
		markers3: {
			lat: 25.7594497,
			lng: -80.3678427
		},
		markers4: {
			lat: 25.7351285,
			lng: -80.3726209
		},
		markers5: {
			lat: 25.7685469,
			lng: -80.3396823
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
						height: "700px",
						width: "650px",
						paddingTop: "95px",
						paddingBottom: "25px",
						position: "-webkit-sticky",
						position: "sticky",
						top: "0",
						right: "1rem"
					}}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: "AIzaSyCjV5S1bkd7RssX1Z7cytvypvQAgchTt8A" }}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
						yesIWantToUseGoogleMapApiInternals>
						{/* Marker is located below */}
						<AnyReactComponent lat={this.props.center.lat} lng={this.props.center.lng} />
						<AnyReactComponent lat={this.props.markers.lat} lng={this.props.markers.lng} />
						<AnyReactComponent lat={this.props.markers1.lat} lng={this.props.markers1.lng} />
						<AnyReactComponent lat={this.props.markers2.lat} lng={this.props.markers2.lng} />
						<AnyReactComponent lat={this.props.markers3.lat} lng={this.props.markers3.lng} />
						<AnyReactComponent lat={this.props.markers4.lat} lng={this.props.markers4.lng} />
						<AnyReactComponent lat={this.props.markers5.lat} lng={this.props.markers5.lng} />
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

SimpleMap.propTypes = {
	center: PropTypes.object,
	markers: PropTypes.any,
	markers1: PropTypes.any,
	markers2: PropTypes.any,
	markers3: PropTypes.any,
	markers4: PropTypes.any,
	markers5: PropTypes.any,
	zoom: PropTypes.number
};

export default SimpleMap;
