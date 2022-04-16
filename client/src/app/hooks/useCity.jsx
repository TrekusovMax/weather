import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getWeatherError } from "../store/weather"

const CityContext = React.createContext()

export const useCity = () => {
	return useContext(CityContext)
}
export const CityProvider = ({ children }) => {
	const error = useSelector(getWeatherError())

	return <CityContext.Provider value={{ error }}>{children}</CityContext.Provider>
}

CityProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
