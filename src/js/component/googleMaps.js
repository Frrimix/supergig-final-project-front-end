import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper } from "google-maps-react";

// Importing styles*/
import "../../styles/googleMaps.scss";

const mapStyles = {
	width: "100%",
	height: "100%"
};

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={{
					lat: -1.2884,
					lng: 36.8233
				}}
			/>
		);
	}
}

MapContainer.propTypes = {
	google: PropTypes.any
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyBA5-kMADrEZu0Mxp6HwMWgdgGQkk1Bj8c"
})(MapContainer);
