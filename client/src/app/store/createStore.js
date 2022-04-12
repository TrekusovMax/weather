import { combineReducers, configureStore } from "@reduxjs/toolkit"
import qualitiesReducer from "./qualities"

import usersReducer from "./users"

const rootReducer = combineReducers({
	qualities: qualitiesReducer,
	users: usersReducer
})

export function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
