import React from "react"
import LeftBlock from "../components/ui/weather/leftBlock"
import RightBlock from "./../components/ui/weather/rightBlock"

import { useParams } from "react-router-dom"
import { useCity } from "./../hooks/useCity"
import { useSelector } from "react-redux"
import { getWeather, getWeatherError, getWeatherLoadingStatus } from "./../store/weather"
import More from "../components/ui/weather/more"

import { getCitiesInHistory } from "../services/localStorage.service"
import { isNull } from "lodash"

const Main = () => {
	const { city } = useCity()
	const { more, day } = useParams()
	const error = useSelector(getWeatherError())
	const weatherList = useSelector(getWeather())
	const isLoading = useSelector(getWeatherLoadingStatus())

	if (error) {
		return <h1>Город не найден</h1>
	}

	if (isLoading) return "Loading..."

	const { location, forecast } = weatherList

	const cities = !isNull(getCitiesInHistory()) ? getCitiesInHistory().split(",").reverse() : []

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
			<div className="row mt-3">
				{cities.length > 0 && (
					<>
						<h3>
							<p>История просмотров</p>
						</h3>
						<div className="col">
							<ul className="list-group list-group-horizontal list-group-flush">
								{cities.map((c) => (
									<li key={c}>
										<a
											href={`/${c}`}
											className={`text-center list-group-item  mx-2 ${city === c ? "active" : ""}`}>
											{c}
										</a>
									</li>
								))}
							</ul>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Main
