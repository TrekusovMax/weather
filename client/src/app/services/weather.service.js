import axios from "axios"
import localStorageService from "./localStorage.service"
import config from "../config.json"

const httpWeater = axios.create({
	baseURL: config.api_url,
	params: {
		key: config.api_key,
		q: "Москва",
		aqi: "no",
		alerts: "no"
	}
})

const weatherService = {
	getAll: async () => {
		console.log("httpWeater", httpWeater)
		const { data } = await httpWeater.get(httpWeater)
		console.log(data)
		return data
	}
}
export default weatherService
