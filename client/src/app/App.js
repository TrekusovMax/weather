import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'
//import AuthProvider from './hooks/useAuth'
import ProtectedRoute from './components/common/protectedRoute'
import LogOut from './layouts/logOut'
//import AppLoader from './components/ui/hoc/appLoader'

import NavBar from './components/ui/navBar'

function App() {
  return (
    <div className="container mt-3">
      <NavBar />
      <Switch>
        <ProtectedRoute path="/users/:userId?/:edit?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/logout" component={LogOut} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App

