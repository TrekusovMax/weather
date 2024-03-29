import React, { useRef } from "react"
import { Link } from "react-router-dom"
import NavProfile from "./navProfile"
import { useDispatch, useSelector } from "react-redux"
import { getIsLoggedIn } from "../../store/users"

import "react-dadata/dist/react-dadata.css"
import config from "../../config.json"
import history from "../../utils/history"

import { AddressSuggestions } from "react-dadata"

import { getByCityName } from "./../../store/weather"
import localStorageService from "../../services/localStorage.service"

const NavBar = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(getIsLoggedIn())

	const handleClick = () => {
		if (suggestionsRef.current) {
			suggestionsRef.current.setInputValue("")
		}
		dispatch(getByCityName("Москва"))
		history.push("/")
	}

	const handleChange = (cityName) => {
		dispatch(getByCityName(cityName?.data?.city))
		localStorageService.setCityToHistory(cityName?.data?.city)
		history.push(cityName?.data?.city)
	}

	const suggestionsRef = useRef()

	return (
		<nav className="navbar navbar-dark bg-primary rounded">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/" onClick={handleClick}>
					Прогноз погоды
				</Link>
				<div className="w-50">
					<AddressSuggestions
						token={`${config.dadata_api_key}`}
						onChange={(cityName) => {
							handleChange(cityName)
						}}
						inputProps={{ placeholder: "Выберите город" }}
						minChars={3}
						ref={suggestionsRef}
					/>
				</div>
				<div className="d-flex">
					{isLoggedIn ? (
						<NavProfile />
					) : (
						<Link className="nav-link text-white" aria-current="page" to="/login">
							<i className="las la-user" style={{ fontSize: "24px" }}></i>
							<u>Личный кабинет</u>
						</Link>
					)}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
