import { createSlice } from "@reduxjs/toolkit"
import weatherService from "../services/weather.service"
import isOutdated from "./../utils/isOutdated"

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		entities: null,
		isLoading: true,
		error: null
	},
	reducers: {
		weatherRequested: (state) => {
			state.isLoading = true
		},
		weatherReceived: (state, action) => {
			state.entities = action.payload
			state.isLoading = false
		},
		weatherRequestFailed: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { reducer: weatherReducer, actions } = weatherSlice
const { weatherRequested, weatherReceived, weatherRequestFailed } = actions

export const loadWeatherList = () => async (dispatch, getState) => {
	const { lastFetch } = getState().weather
	console.log(lastFetch)
	if (isOutdated(lastFetch)) {
		dispatch(weatherRequested())
		try {
			const { content } = await weatherService.getAll()
			dispatch(weatherReceived(content))
		} catch (error) {
			dispatch(weatherRequestFailed(error.message))
		}
	}
}

export const getWeather = () => (state) => state.weather.entities
export const getWeatherLoadingStatus = () => (state) => state.weather.isLoading

export default weatherReducer
