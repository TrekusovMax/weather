import React from "react"

import LeftBlock from "../components/ui/weather/leftBlock"
import RightBlock from "./../components/ui/weather/rightBlock"

const Main = () => {
	return (
		<div className="overflow-hidden my-5">
			<div className="row gx-3">
				<LeftBlock />
				<RightBlock />
			</div>
		</div>
	)
}

export default Main
