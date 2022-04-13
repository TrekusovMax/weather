import React from "react"
import { useDispatch, useSelector } from "react-redux"
import LeftBlock from "../components/ui/leftBlock"
import { getWeather, loadWeatherList } from "../store/weather"

const Main = () => {
	const dispatch = useDispatch()
	const list = useSelector(getWeather())
	console.log(list)
	return (
		<div className="overflow-hidden my-5">
			<div className="row gx-3">
				<LeftBlock />
			</div>
		</div>
	)
}

export default Main
