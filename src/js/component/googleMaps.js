import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { render } from "react-dom";
import { Link } from "react-router-dom";

// Importing styles*/
import "../../styles/googleMaps.scss";

export const GoogleMaps = () => {
	function initMap() {
		// Map Options
		var options = {
			zoom: 8,
			center: { lat: 25.7617, lng: -80.1918 }
		};

		// New Map
		var map = new google.maps.Map(document.getElementById("map"), options);

		// Add Marker
		var marker = new google.maps.Marker({
			position: { lat: 25.7617, lng: -80.1918 },
			map: map
		});
	}
	return (
		<div className="google-map-container">
			{/* <h1>Google Map</h1> */}
			<div id="map"></div>

			<script
				async
				defer
				src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA5-kMADrEZu0Mxp6HwMWgdgGQkk1Bj8c&callback=initMap"></script>
		</div>
	);
};
