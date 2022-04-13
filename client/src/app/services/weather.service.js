import axios from "axios"
import localStorageService from "./localStorage.service"
import config from "../config.json"

const endpoint = "forecast.json"

const httpWeater = axios.create({
	baseURL: config.api_url,
	params: {
		key: config.api_key,
		q: "Москва",
		aqi: "no",
		alerts: "no",
		lang: "ru"
	}
})

const weatherService = {
	getAll: async () => {
		const { data } = await httpWeater.get(endpoint)
		return data
	}
}
export default weatherService
