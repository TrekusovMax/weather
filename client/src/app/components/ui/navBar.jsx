import React from 'react'
import { Link } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn())
  return (
    <nav className="navbar navbar-dark bg-primary rounded">
      <div className="container-fluid">
        <a className="navbar-brand">Прогноз погоды</a>
        <form className="d-flex w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Выберите город"
            aria-label="Выберите город"
          />
        </form>
        <div className="text-white dropdown">
          <i className="las la-user" style={{ fontSize: '24px' }}></i>
          <a
            className="text-white dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Личный кабинет
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Профиль
            </a>
            <a className="dropdown-item" href="/favorites.html">
              Избранное
            </a>
            <a className="dropdown-item" href="#">
              Выйти
            </a>
          </div>
        </div>
      </div>
    </nav>
    /*<nav className="navbar bg-light mb-3">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">
              Main
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/users">
                Users
              </Link>
            </li>
          )}
        </ul>
        <div className="d-flex">
          {isLoggedIn ? (
            <NavProfile />
          ) : (
            <Link className="nav-link " aria-current="page" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>*/
  )
}

export default NavBar

