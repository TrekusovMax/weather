import React from "react"
import PropTypes from "prop-types"

const NavButton = () => {
	return (
		<nav>
			<div className="nav nav-tabs flex-row justify-content-evenly" id="nav-tab" role="tablist">
				<button
					className="nav-link active"
					id="nav-home-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-home"
					type="button"
					role="tab"
					aria-controls="nav-home"
					aria-selected="true">
					Сегодня
				</button>
				<button
					className="nav-link"
					id="nav-profile-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-profile"
					type="button"
					role="tab"
					aria-controls="nav-profile"
					aria-selected="false">
					Завтра
				</button>
				<button
					className="nav-link"
					id="nav-contact-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-contact"
					type="button"
					role="tab"
					aria-controls="nav-contact"
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
