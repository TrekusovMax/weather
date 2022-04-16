import axios from "axios"
import localStorageService from "./localStorage.service"
import config from "../config.json"

const endpoint = "forecast.json"

const city = decodeURI(document.location.pathname).substring(1).split("/")[0]

const httpWeater = axios.create({
	baseURL: config.api_url,
	params: {
		key: config.api_key,
		q: city === "" ? "Москва" : city,
		aqi: "no",
		alerts: "no",
		lang: "ru",
		days: 3
	}
})

const weatherService = {
	getAll: async () => {
		const { data } = await httpWeater.get(endpoint)
		return data
	}
}
export default weatherService
