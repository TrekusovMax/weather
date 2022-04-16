import React from "react"
import LeftBlock from "../components/ui/weather/leftBlock"
import RightBlock from "./../components/ui/weather/rightBlock"

import { useParams } from "react-router-dom"
import { useCity } from "./../hooks/useCity"

const Main = () => {
	const { city, more } = useParams()
	const { error } = useCity()
	//console.log(city)
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
