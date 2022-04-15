import React from "react"
import PropTypes from "prop-types"

const NavButton = () => {
	return (
		<nav>
			<div className="nav nav-tabs flex-row justify-content-evenly" id="nav-tab" role="tablist">
				<button
					className="nav-link active"
					id="nav-today-tab"
					data-bs-toggle="tab"
					data-bs-target="#today"
					type="button"
					role="tab"
					aria-controls="today"
					aria-selected="true">
					Сегодня
				</button>
				<button
					className="nav-link"
					id="nav-tomorrow-tab"
					data-bs-toggle="tab"
					data-bs-target="#tomorrow"
					type="button"
					role="tab"
					aria-controls="tomorrow"
					aria-selected="false">
					Завтра
				</button>
				<button
					className="nav-link"
					id="nav-forcast-tab"
					data-bs-toggle="tab"
					data-bs-target="#forcast"
					type="button"
					role="tab"
					aria-controls="forcast"
					aria-selected="false">
					3 дня
				</button>
			</div>
		</nav>
	)
}
/* LeftBlock.propTypes = {
    data: PropTypes.array
}; */

export default NavButton
