import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import dateFormat from "dateformat"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users"
import { updateUser } from "./../../../store/users"
const City = ({ city, date }) => {
	const isUserLoggedIn = useSelector(getIsLoggedIn())
	const currentUser = useSelector(getCurrentUserData())
	const dispatch = useDispatch()

	const [isFavoriteCity, setFavoriteCity] = useState(false)
	const [isLoaded, setLoaded] = useState(false)
	const [data, setData] = useState()

	const [favorites, setFavorites] = useState(currentUser.favorites)

	useEffect(() => {
		if (currentUser) {
			//favorites.push(...currentUser.favorites)
			setData({
				...currentUser,
				favorites
			})
			setFavorites(currentUser.favorites)
			console.log(favorites)

			for (let item of favorites) {
				if (item === city) {
					setFavoriteCity(true)
				} else {
					setFavoriteCity(false)
				}
			}
		}
	}, [currentUser])

	/* useEffect(() => {
		if (!isLoaded) {
			for (let item of favorites) {
				console.log(favorites)
				if (item === city) {
					setFavoriteCity(true)
				} else {
					setFavoriteCity(false)
				}
			}
		}
		setLoaded(true)
	}, [favorites]) */

	const handleClick = (city) => {
		console.log(favorites)
		console.log(isFavoriteCity)

		if (!isFavoriteCity) {
			setFavorites([city])
			setFavoriteCity(true)
		} else {
			setFavorites((prevState) => prevState.filter((c) => c !== city))
			setFavoriteCity(false)
		}

		console.log(favorites)
		console.log(isFavoriteCity)

		setData({
			...currentUser,
			favorites
		})
		console.log(data)
		//dispatch(updateUser({ ...data }))
	}
	return (
		<>
			<div>
				<div className="d-flex flex-row align-items-center text-yellow mb-2">
					<h2 className="mr-3 mr-auto p-2">{city}</h2>
					{isUserLoggedIn && (
						<div onClick={() => handleClick(city)}>
							<img
								src={
									isFavoriteCity
										? "https://img.icons8.com/fluency/48/000000/star.png"
										: "https://img.icons8.com/color/48/000000/star--v1.png"
								}
								height="30px"
								width="30px"
								data-toggle="tooltip"
								data-placement="right"
								title="Добавить в избранное"
								style={{ cursor: "pointer" }}
							/>
							<sub className="p-2">
								{isFavoriteCity ? "Убрать из избранного" : "Добавить в избранное"}
							</sub>
						</div>
					)}
				</div>
			</div>
			<p>{dateFormat(date, "dd.mm.yyyy")}</p>
		</>
	)
}
City.propTypes = {
	city: PropTypes.string,
	date: PropTypes.string
}

export default City
