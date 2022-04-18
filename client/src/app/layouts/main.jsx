import React from "react"
import LeftBlock from "../components/ui/weather/leftBlock"
import RightBlock from "./../components/ui/weather/rightBlock"

import { useParams } from "react-router-dom"
import { useCity } from "./../hooks/useCity"
import { useSelector } from "react-redux"
import { getWeather, getWeatherError, getWeatherLoadingStatus } from "./../store/weather"
import More from "../components/ui/weather/more"
import { getIsLoggedIn } from "../store/users"

const Main = () => {
	const { city } = useCity()
	const { more, day } = useParams()
	const error = useSelector(getWeatherError())
	const isLoading = useSelector(getWeatherLoadingStatus())
	const weatherList = useSelector(getWeather())

	if (isLoading) return "Loading..."

	if (error) {
		return <h1>Город не найден</h1>
	}
	const { location, forecast } = weatherList

	return (
		<div className="overflow-hidden my-5">
			<div className="row gx-3">
				{!more ? (
					<>
						<LeftBlock city={city} location={location} forecast={forecast} />
						<RightBlock forecast={forecast} />
					</>
				) : (
					<More
						city={city}
						location={location}
						forecast={forecast}
						day={day === "today" ? forecast.forecastday[0] : forecast.forecastday[1]}
					/>
				)}
			</div>
		</div>
	)
}

export default Main
