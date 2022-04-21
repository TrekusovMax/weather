import React from "react"
import { Redirect } from "react-router-dom"

import { useSelector } from "react-redux"
import { getCurrentUserData } from "../store/users"

const Favorites = () => {
	const currentUser = useSelector(getCurrentUserData())

	return (
		<div className="overflow-hidden my-5">
			<div className="row gx-3">
				<div className="col ">
					<div className="p-3 border bg-light">
						<h2 className="mb-3 text-center ">Избранное </h2>
					</div>
					<div className="p-3 mt-3 border bg-light">
						<div className="row">
							<div className="col d-flex flex-wrap flex-row">
								{currentUser.favorites.map((city) => (
									<div key={city} className="card col-3 mt-2">
										<div className="card-body d-flex flex-column align-items-center ">
											<h4 className="card-title mb-5 fs-5">{city}</h4>
											<a href={`/${city}`} className="btn btn-primary w-100">
												Перейти
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Favorites
