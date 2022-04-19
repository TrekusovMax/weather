import { isNull } from "lodash"

const TOKEN_KEY = "jwt-token"
const REFRESH_KEY = "jwt-refresh-token"
const EXPIRES_KEY = "jwt-expires"
const USERID_KEY = "user-local-id"
const HISTORY = "history"

export function setCityToHistory(city) {
	const cities = new Array()
	const citiesInHistory = getCitiesInHistory()

	if (!isNull(citiesInHistory)) {
		const citiesArray = citiesInHistory.split(",")

		if (citiesArray.length > 6) {
			citiesArray.shift()
		}

		cities.push(citiesArray)

		if (!citiesArray.includes(city)) cities.push(city)
	} else {
		cities.push(city)
	}
	localStorage.setItem(HISTORY, cities)
}
export function getCitiesInHistory() {
	return localStorage.getItem(HISTORY)
}

export function setTokens({ refreshToken, accessToken, userId, expiresIn = 3600 }) {
	const expiresDate = new Date().getTime() + expiresIn * 1000
	localStorage.setItem(USERID_KEY, userId)
	localStorage.setItem(TOKEN_KEY, accessToken)
	localStorage.setItem(REFRESH_KEY, refreshToken)
	localStorage.setItem(EXPIRES_KEY, expiresDate)
}
export function getAccessToken() {
	return localStorage.getItem(TOKEN_KEY)
}
export function getRefreshToken() {
	return localStorage.getItem(REFRESH_KEY)
}
export function removeAuthData() {
	localStorage.removeItem(USERID_KEY)
	localStorage.removeItem(TOKEN_KEY)
	localStorage.removeItem(REFRESH_KEY)
	localStorage.removeItem(EXPIRES_KEY)
}

export function getTokenExpiresDate() {
	return localStorage.getItem(EXPIRES_KEY)
}
export function getUserId() {
	return localStorage.getItem(USERID_KEY)
}
const localStorageService = {
	setTokens,
	getAccessToken,
	getRefreshToken,
	getTokenExpiresDate,
	getUserId,
	removeAuthData,
	setCityToHistory,
	getCitiesInHistory
}
export default localStorageService
