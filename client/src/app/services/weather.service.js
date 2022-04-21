import axios from "axios"
import localStorageService from "./localStorage.service"
import config from "../config.json"

const endpoint = "forecast.json"

let city = decodeURI(document.location.pathname).substring(1).split("/")[0]

const httpWeater = axios.create({
	baseURL: config.api_url
})

const weatherService = {
	getAll: async () => {
		const { data } = await httpWeater.get(endpoint, {
			params: {
				key: config.api_key,
				q: city === "" || city === "favorites" ? "Москва" : city,
				aqi: "no",
				alerts: "no",
				lang: "ru",
				days: 3
			}
		})

		return data
	},
	getCity: async (c) => {
		const { data } = await httpWeater.get(endpoint, {
			params: {
				key: config.api_key,
				q: c,
				aqi: "no",
				alerts: "no",
				lang: "ru",
				days: 3
			}
		})

		return data
	}
}
export default weatherService
