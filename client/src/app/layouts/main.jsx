import React from "react"
import LeftBlock from "../components/ui/weather/leftBlock"
import RightBlock from "./../components/ui/weather/rightBlock"

import { useParams } from "react-router-dom"
import { useCity } from "./../hooks/useCity"
import { useSelector } from "react-redux"
import { getWeatherError } from "./../store/weather"

const Main = () => {
	const { city, more } = useParams()
	const error = useSelector(getWeatherError())

	if (error) {
		return <h1>Город не найден</h1>
	}
	return (
		<div className="overflow-hidden my-5">
			<div className="row gx-3">
				{!more ? (
					<>
						<LeftBlock />
						<RightBlock />
					</>
				) : (
					<span>More</span>
				)}
			</div>
		</div>
	)
}

export default Main
