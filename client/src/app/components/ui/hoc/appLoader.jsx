import { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from "../../../store/users"
//import { loadQualitiesList } from "../../../store/qualities"
import { loadWeatherList } from "./../../../store/weather"

const AppLoader = ({ children }) => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(getIsLoggedIn())
	const usersStatusLoading = useSelector(getUsersLoadingStatus())
	useEffect(() => {
		//dispatch(loadQualitiesList())
		if (isLoggedIn) {
			dispatch(loadUsersList())
		}
	}, [isLoggedIn])
	useEffect(() => {
		dispatch(loadWeatherList())
	}, [])
	if (usersStatusLoading) return "Loading..."
	return children
}

AppLoader.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default AppLoader
