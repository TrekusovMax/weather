import history from "../../utils/history"

export const setWeather = (city) => {
	return (dispatch, getState) => {
		history.push(`/${city}`)
	}
}
