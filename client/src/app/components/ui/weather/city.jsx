import React from "react"
import PropTypes from "prop-types"
import dateFormat from "dateformat"
const City = ({ city, date }) => {
	return (
		<>
			<div>
				<div className="d-flex flex-row align-items-center text-yellow mb-2">
					<h2 className="mr-3 mr-auto p-2">{city}</h2>
					<img
						src="https://img.icons8.com/color/48/000000/star--v1.png"
						height="30px"
						width="30px"
						data-toggle="tooltip"
						data-placement="right"
						title="Добавить в избранное"
						style={{ cursor: "pointer" }}
					/>
					<sub className="p-2">Добавить в избранное</sub>
				</div>
			</div>
			<p>{dateFormat(date, "dd.mm.yyyy HH:MM")}</p>
		</>
	)
}
City.propTypes = {
	city: PropTypes.string,
	date: PropTypes.string
}

export default City
