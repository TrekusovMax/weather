import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getWeatherLoadingStatus } from "../../../store/weather"
import { convertTime12To24 } from "../../../utils/convertTime12To24"

const RightBlock = ({ forecast }) => {
	const isLoading = useSelector(getWeatherLoadingStatus())
	const moon_phase = {
		"New Moon": "Новолуние",
		"Waxing Crescent": "Растущий месяц",
		"First Quarter": "Первая четверть",
		"Waxing Gibbous": "Растущая Луна",
		"Full Moon": "Полнолуние",
		"Waning Gibbous": "Убывающая Луна",
		"Last Quarter": "Последняя четверть",
		"Waning Crescent": "Убывающий месяц"
	}

	if (isLoading) return "Loading..."
	const current = forecast.forecastday[0]
	const isHaveTimeMoonset =
		current.astro.moonset.includes("AM") || current.astro.moonset.includes("PM") ? true : false
	const isHaveTimeMoonrise =
		current.astro.moonrise.includes("AM") || current.astro.moonrise.includes("PM") ? true : false

	return (
		<div className="col-4 d-flex flex-column w-500">
			<div className="sp-3 border bg-light p-3">
				<div className="d-flex align-items-center justify-content-between p-2">
					<img src="img/sunrise.ico" alt="" />
					<b className="align-self-center">Восход</b>
					<h5>{convertTime12To24(current.astro.sunrise)}</h5>
				</div>
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<img src="img/sunset.ico" alt="" />
					<b className="align-self-center">Закат</b>
					<h5>{convertTime12To24(current.astro.sunset)}</h5>
				</div>
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<img src="img/moonrise.png" alt="" />
					<b className="align-self-center">Восход Луны</b>
					<h5>{isHaveTimeMoonrise ? convertTime12To24(current.astro.moonrise) : "Нет"}</h5>
				</div>
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<img src="img/moonset.png" alt="" />
					<b className="align-self-center">Заход Луны</b>
					<h5>{isHaveTimeMoonset ? convertTime12To24(current.astro.moonset) : "Нет"}</h5>
				</div>
				<hr className="my-4" />
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<img
						src={`${window.location.origin}/img/${current.astro.moon_phase}.png`}
						width="64px"
						height="64px"
						alt=""
					/>

					<h5>{moon_phase[current.astro.moon_phase]}</h5>
				</div>
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<b className="align-self-center">Освещённость</b>
					<h5>{current.astro.moon_illumination}%</h5>
				</div>
			</div>
		</div>
	)
}
RightBlock.propTypes = {
	city: PropTypes.string,
	location: PropTypes.object,
	forecast: PropTypes.object
}

export default RightBlock
