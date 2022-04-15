import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getWeatherLoadingStatus, getWeather } from "../../../store/weather"
import City from "./city"
import NavButton from "./navButton"
import NavContent from "./navContent"

const LeftBlock = () => {
	const isLoading = useSelector(getWeatherLoadingStatus())

	const weatherList = useSelector(getWeather())
	if (isLoading) return "Loading..."

	const { location, forecast } = weatherList
	const current = forecast.forecastday[0]
	const tomorrow = forecast.forecastday[1]
	/*console.log(current)
	console.log(tomorrow) */
	return (
		<>
			<div className="col-8 w-500">
				<div className="p-3 border bg-light">
					<City city={location.name} date={location.localtime} />
					<NavButton />
					<div className="tab-content" id="nav-tabContent">
						<NavContent id={"today"} day={current} active={"active"} />
						<NavContent id={"tomorrow"} day={tomorrow} />
						<NavContent id={"forcast"} forecast={forecast.forecastday} />
					</div>
				</div>
			</div>
		</>
	)
}

export default LeftBlock