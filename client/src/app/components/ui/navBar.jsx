import React from "react"
import { Link } from "react-router-dom"
import NavProfile from "./navProfile"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../store/users"

const NavBar = () => {
	const isLoggedIn = useSelector(getIsLoggedIn())
	return (
		<nav className="navbar navbar-dark bg-primary rounded">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Прогноз погоды
				</Link>
				<form className="d-flex w-50">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Выберите город"
						aria-label="Выберите город"
					/>
				</form>

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
