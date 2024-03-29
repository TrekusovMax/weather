import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import Users from "./layouts/users"
import Login from "./layouts/login"
import Main from "./layouts/main"
import ProtectedRoute from "./components/common/protectedRoute"
import LogOut from "./layouts/logOut"
import AppLoader from "./components/ui/hoc/appLoader"

import NavBar from "./components/ui/navBar"
import { ToastContainer } from "react-toastify"
import { CityProvider } from "./hooks/useCity"
import Favorites from "./layouts/favorites"

function App() {
	return (
		<div>
			<AppLoader>
				<CityProvider>
					<div className="container mt-3">
						<NavBar />
						<Switch>
							<ProtectedRoute path="/users/:userId?/:edit?" component={Users} />
							<Route path="/login/:type?" component={Login} />
							<Route path="/logout" component={LogOut} />
							<Route path="/favorites" exact component={Favorites} />
							<Route path="/:city?/:more?/:day?" exact component={Main} />
							<Redirect to="/" />
						</Switch>
					</div>
				</CityProvider>
			</AppLoader>
			<ToastContainer />
		</div>
	)
}

export default App
