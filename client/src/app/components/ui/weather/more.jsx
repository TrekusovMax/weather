import React from "react"
import PropTypes from "prop-types"
import { Link, useParams } from "react-router-dom"
import { useCity } from "./../../../hooks/useCity"

const More = ({ city, day }) => {
	const time = ["0", "3", "6", "9", "12", "15", "18", "21"]
	const hours = day["hour"]
	const { city } = useCity()

	return (
		<div className="col-8 border-start">
			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<span>{t < 10 ? `0${t}` : t}</span>
						<sup>00</sup>
					</div>
				))}
			</div>

			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<img src={`${hours[t].condition.icon}`} alt={`${hours[t].condition.text}`} srcSet="" />
					</div>
				))}
			</div>
			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
							{hours[t].temp_c > 0 ? "+" : ""}
							{hours[t].temp_c}&#8451;
						</h4>
					</div>
				))}
			</div>
			<h5 className="text-center mt-2">Скорость ветра, м/с</h5>
			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
							{Math.round(hours[t].wind_kph / 3.6)}
						</h4>
					</div>
				))}
			</div>

			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<div style={{ transform: `rotate(${hours[t].wind_degree + 180}deg)`, color: "blue" }}>
							<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
						</div>
					</div>
				))}
			</div>
			<div className="d-flex justify-content-end mt-3">
				<Link to={`/${city}/more`} className="align-self-end">
					Посмотреть подробнее
				</Link>
			</div>
		</div>
	)
}
More.propTypes = {
	day: PropTypes.object
}

export default More
