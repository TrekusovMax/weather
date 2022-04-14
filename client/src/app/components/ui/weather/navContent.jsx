import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getWeather } from "../../../store/weather"
import ForDay from "./forDay"

const NavContent = ({ current }) => {
	const windDirection = {
		N: "С",
		NNE: "СВ",
		NE: "СВ",
		ENE: "В",
		E: "В",
		ESE: "ЮВ",
		SE: "ЮВ",
		SSE: "Ю",
		S: "Ю",
		SSW: "ЮЗ",
		SW: "ЮЗ",
		WSW: "З",
		W: "З",
		WNW: "СЗ",
		NW: "СЗ",
		NNW: "С"
	}
	return (
		<div
			className="tab-pane fade show active"
			id="nav-home"
			role="tabpanel"
			aria-labelledby="nav-home-tab">
			<div className="row mt-2">
				<div className="col-4">
					<div className="mt-2 d-flex flex-row justify-content-between">
						<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 w-50 text-center">
							{current.temp_c > 0 ? "+" : "-"}
							{current.temp_c}&#8451;
						</h4>
						<img src={current.condition.icon} alt="Пасмурно" />
						<p className="align-self-end text-secondary">{current.condition.text}</p>
					</div>
					<hr />
					<div className="mt-2 d-flex flex-row justify-content-between">
						<p>По ощущению</p>
						<span>
							{current.feelslike_c > 0 ? "+" : ""}
							{Math.round(current.feelslike_c)}&#8451;
						</span>
					</div>
					<div className="mt-2 d-flex flex-row justify-content-between">
						<p>Ветер</p>
						<span>
							{Math.round(current.wind_kph / 3.6)} м/с, "{windDirection[current.wind_dir]}"
						</span>
					</div>
					<div className="mt-2 d-flex flex-row justify-content-between">
						<p>Давление</p>
						<span>{Math.round(current.pressure_mb / 1.333)} мм.рт.ст.</span>
					</div>
					<div className="mt-2 d-flex flex-row justify-content-between">
						<p>Влажность</p>
						<span>{current.humidity}%</span>
					</div>
					<div className="mt-2 d-flex flex-row justify-content-between">
						<p>Облачность</p>
						<span>{current.cloud}%</span>
					</div>
				</div>
				<ForDay />
			</div>
		</div>
	)
}
NavContent.propTypes = {
	current: PropTypes.object
}

export default NavContent
