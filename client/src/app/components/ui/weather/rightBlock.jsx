import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getWeatherLoadingStatus, getWeather } from "../../../store/weather"
import { convertTime12To24 } from "../../../utils/convertTime12To24"

const RightBlock = () => {
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
	const weatherList = useSelector(getWeather())
	if (isLoading) return "Loading..."

	const { forecast } = weatherList
	const current = forecast.forecastday[0]

	console.log(current)
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
					<h5>{convertTime12To24(current.astro.moonrise)}</h5>
				</div>
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<img src="img/moonset.png" alt="" />
					<b className="align-self-center">Заход Луны</b>
					<h5>{convertTime12To24(current.astro.moonset)}</h5>
				</div>
				<hr className="my-4" />
				<div className="d-flex align-items-center flex-row justify-content-between p-2">
					<img src="img/moon.png" width="64px" height="64px" alt="" />

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

export default RightBlock
