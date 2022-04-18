import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import history from "../../../utils/history"

import { getWeatherLoadingStatus } from "../../../store/weather"
import { useSelector } from "react-redux"
import City from "./city"

const More = ({ city, location, forecast, day }) => {
	const time = ["0", "3", "6", "9", "12", "15", "18", "21"]

	const isLoading = useSelector(getWeatherLoadingStatus())
	if (isLoading) return "Loading..."

	const hours = day["hour"]
	const handleClick = () => {
		history.goBack()
	}

	return (
		<div className="col">
			<div className="p-3 border bg-light">
				<City city={city} date={day.date} />
				<div className="d-flex mb-3 flex-row justify-content-around">
					{time.map((t) => (
						<div key={t}>
							<span>{t < 10 ? `0${t}` : t}</span>
							<sup>00</sup>
						</div>
					))}
				</div>
				<div className="d-flex mb-3 flex-row justify-content-around">
					{time.map((t) => (
						<div key={t}>
							<img
								src={`${hours[t].condition.icon}`}
								alt={`${hours[t].condition.text}`}
								srcSet=""
							/>
						</div>
					))}
				</div>
				<div className="d-flex mb-3 flex-row justify-content-around">
					{time.map((t) => (
						<div key={t}>
							<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
								{hours[t].temp_c > 0 ? "+" : ""}
								{hours[t].temp_c}&#8451;
							</h4>
						</div>
					))}
				</div>
				<h5 className="text-center mb-3 mt-2">Ощущается как</h5>
				<div className="d-flex flex-row justify-content-around mb-3">
					{time.map((t) => (
						<div key={t}>
							<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
								{Math.round(hours[t].feelslike_c)}
							</h4>
						</div>
					))}
				</div>
				<h5 className="text-center mt-2 mb-3">Скорость ветра, м/с</h5>
				<div className="d-flex flex-row justify-content-around mb-3">
					{time.map((t) => (
						<div key={t}>
							<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
								{Math.round(hours[t].wind_kph / 3.6)}
							</h4>
						</div>
					))}
				</div>

				<div className="d-flex flex-row justify-content-around mb-3">
					{time.map((t) => (
						<div key={t}>
							<div style={{ transform: `rotate(${hours[t].wind_degree + 180}deg)`, color: "blue" }}>
								<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
							</div>
						</div>
					))}
				</div>
				<div className="d-flex justify-content-end mt-3 mb-3">
					<button className="btn btn-primary" onClick={handleClick}>
						Назад
					</button>
				</div>
			</div>
		</div>
	)
}
More.propTypes = {
	city: PropTypes.string,
	location: PropTypes.object,
	forecast: PropTypes.object
}

export default More
