import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getWeatherLoadingStatus } from "../../../store/weather"
import City from "./city"
import NavButton from "./navButton"
import NavContent from "./navContent"

const LeftBlock = ({ city, location, forecast }) => {
	const isLoading = useSelector(getWeatherLoadingStatus())

	if (isLoading) return "Loading..."

	const current = forecast.forecastday[0]
	const tomorrow = forecast.forecastday[1]

	return (
		<>
			<div className="col-8 w-500">
				<div className="p-3 border bg-light">
					<City city={city} date={location.localtime} />
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
LeftBlock.propTypes = {
	city: PropTypes.string,
	location: PropTypes.object,
	forecast: PropTypes.object
}
export default LeftBlock
