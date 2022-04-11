import React from "react"
import PropTypes from "prop-types"
import UserCard from "../../ui/userCard"
// import QualitiesCard from "../../ui/qualitiesCard"
import { useSelector } from "react-redux"
import { getUserById } from "../../../store/users"

const UserPage = ({ userId }) => {
	const user = useSelector(getUserById(userId))

	if (user) {
		return (
			<div className="container">
				<div className="row gutters-sm">
					<div className="col-md-4 mb-3">
						<UserCard user={user} />
						{/* <QualitiesCard data={user.qualities} /> */}
					</div>
					<div className="col-md-8"></div>
				</div>
			</div>
		)
	} else {
		return <h1>Loading</h1>
	}
}

UserPage.propTypes = {
	userId: PropTypes.string.isRequired
}

export default UserPage
