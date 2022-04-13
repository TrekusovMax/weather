import React from "react"
import { useSelector } from "react-redux"
import { getWeather } from "../store/weather"

const Main = () => {
	const weather = useSelector(getWeather())
	console.log(weather)
	return (
		<div className="container mt-5">
			<h1> Main Page</h1>
		</div>
	)
}

export default Main
