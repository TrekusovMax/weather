import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavProfile from "./navProfile"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../store/users"
import { AddressSuggestions } from "react-dadata"
import "react-dadata/dist/react-dadata.css"
import config from "../../config.json"
import history from "../../utils/history"

const NavBar = () => {
	const isLoggedIn = useSelector(getIsLoggedIn())
	const handleClick = () => {
		history.push("/")
	}
	const [value, setValue] = useState()

	useEffect(() => {
		if (value) {
			history.push(value?.data?.city)
		}
		console.log(history)
	}, [value])

	return (
		<nav className="navbar navbar-dark bg-primary rounded">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/" onClick={handleClick}>
					Прогноз погоды
				</Link>
				<div className="w-50">
					<AddressSuggestions
						token={`${config.dadata_api_key}`}
						value={value}
						onChange={setValue}
						inputProps={{ placeholder: "Выберите город" }}
						minChars={3}
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
