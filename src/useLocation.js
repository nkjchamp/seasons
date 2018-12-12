import { useState, useEffect } from "react";

export default () => {
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// succcessful callback
				// must call setState to update state
				setLat(position.coords.latitude);
			},
			err => {
				// failure callback
				setErrorMessage(err.message);
			}
		);
	}, []);
	return [lat, errorMessage];
};
