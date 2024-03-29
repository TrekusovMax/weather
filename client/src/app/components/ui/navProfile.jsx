import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getCurrentUserData } from "../../store/users"

function NavProfile() {
	const currentUser = useSelector(getCurrentUserData())

	const [isOpen, setOpen] = useState(false)

	const toggleMenu = () => {
		setOpen((prevState) => !prevState)
	}

	if (!currentUser) return "Loading..."
	return (
		<div className="dropdown" onClick={toggleMenu}>
			<div className="btn text-white  dropdown-toggle d-flex align-items-center">
				<div className="me-2">{currentUser.name}</div>
				<img src={currentUser.image} alt="" height="40" className="img-responsive rounded-circle" />
			</div>
			<div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
				<Link to={`/favorites`} className="dropdown-item">
					Избранное
				</Link>
				<Link to={`/users/${currentUser._id}/edit`} className="dropdown-item">
					Профиль
				</Link>
				<Link to="/logout" className="dropdown-item">
					Выход
				</Link>
			</div>
		</div>
	)
}

export default NavProfile
