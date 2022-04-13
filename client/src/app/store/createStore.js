import { combineReducers, configureStore } from "@reduxjs/toolkit"

import usersReducer from "./users"
import weatherReducer from "./weather"

const rootReducer = combineReducers({
	weather: weatherReducer,
	users: usersReducer
})

export function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
