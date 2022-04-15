import React from "react"
import PropTypes from "prop-types"
import ForDay from "./forDay"
import Forcast from "./forecast"

const NavContent = ({ day, id, active, forecast }) => {
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
			className={`tab-pane fade show ${active}`}
			id={id}
			role="tabpanel"
			aria-labelledby={`${id}-tab`}>
			<div className="row mt-2">
				{!forecast ? (
					<>
						<div className="col-4">
							<div className="mt-2 d-flex flex-row justify-content-between">
								<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 w-50 text-center">
									{(day.day.maxtemp_c - day.day.mintemp_c) / 2 > 0 ? "+" : "-"}
									{Math.round((day.day.maxtemp_c - day.day.mintemp_c) / 2)}&#8451;
								</h4>
								<img src={day.day.condition.icon} alt="Пасмурно" />
								<p className="align-self-end text-secondary">{day.day.condition.text}</p>
							</div>
							<hr />
							<div className="mt-2 d-flex flex-row justify-content-between">
								<p>По ощущению</p>
								<span>
									{day.hour[12].feelslike_c > 0 ? "+" : ""}
									{Math.round(day.hour[12].feelslike_c)}&#8451;
								</span>
							</div>
							<div className="mt-2 d-flex flex-row justify-content-between">
								<p>Ветер</p>
								<span>
									{Math.round(day.hour[12].wind_kph / 3.6)} м/с, "
									{windDirection[day.hour[12].wind_dir]}"
								</span>
							</div>
							<div className="mt-2 d-flex flex-row justify-content-between">
								<p>Давление</p>
								<span>{Math.round(day.hour[12].pressure_mb / 1.333)} мм.рт.ст.</span>
							</div>
							<div className="mt-2 d-flex flex-row justify-content-between">
								<p>Влажность</p>
								<span>{day.hour[12].humidity}%</span>
							</div>
							<div className="mt-2 d-flex flex-row justify-content-between">
								<p>Облачность</p>
								<span>{day.hour[12].cloud}%</span>
							</div>
						</div>
						<ForDay day={day} />
					</>
				) : (
					<Forcast />
				)}
			</div>
		</div>
	)
}
NavContent.propTypes = {
	day: PropTypes.object,
	forecast: PropTypes.array,
	id: PropTypes.string,
	active: PropTypes.string
}

export default NavContent
