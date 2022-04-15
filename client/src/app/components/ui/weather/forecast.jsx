import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getWeather } from "../../../store/weather"
import Day from "./day"

const Forcast = () => {
	const { forecast } = useSelector(getWeather())

	return (
		<div className="row">
			<div className="col-4">
				<Day day={forecast.forecastday[0]} />
			</div>
			<div className="col-4 border-start">
				<Day day={forecast.forecastday[1]} />
			</div>
			<div className="col-4 border-start">
				<Day day={forecast.forecastday[2]} />
			</div>
		</div>
	)
}
Forcast.propTypes = {
	day: PropTypes.object
}

export default Forcast
