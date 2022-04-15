import React from "react"
import PropTypes from "prop-types"
import dateFormat, { masks } from "dateformat"

const Day = ({ day }) => {
	const time = ["6", "12", "18", "23"]
	return (
		<>
			<div className="d-flex flex-row justify-content-around my-2">
				<div>
					<u>
						<b>{dateFormat(day.date, "dd.mm.yyyy")}</b>
					</u>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-around">
				<div>
					<span>Утро</span>
				</div>
				<div>
					<span>День</span>
				</div>
				<div>
					<span>Вечер</span>
				</div>
				<div>
					<span>Ночь</span>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<img src={day.hour[t].condition.icon} alt={`${day.hour[t].condition.text}`} srcSet="" />
					</div>
				))}
			</div>
			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<h5 className="bg-primary rounded p-1 text-dark bg-opacity-10 text-center">
							{day.hour[t].temp_c > 0 ? "+" : ""}
							{Math.round(day.hour[t].temp_c)}&#8451;
						</h5>
					</div>
				))}
			</div>
			<h5 className="text-center my-3">Скорость ветра, м/с</h5>
			<div className="d-flex flex-row justify-content-around">
				{time.map((t) => (
					<div key={t}>
						<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
							{Math.round(day.hour[t].wind_kph / 3.6)}
						</h4>
					</div>
				))}
			</div>

			<div className="d-flex  flex-row justify-content-around">
				{time.map((t) => (
					<div
						key={t}
						style={{ transform: `rotate(${day.hour[t].wind_degree + 180}deg)`, color: "blue" }}>
						<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
					</div>
				))}
			</div>
		</>
	)
}
Day.propTypes = {
	day: PropTypes.object
}

export default Day
