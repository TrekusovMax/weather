import React, { useState } from "react"
import { useParams } from "react-router-dom"
import LoginForm from "../components/ui/loginForm"
import RegisterForm from "../components/ui/registerForm"

const Login = () => {
	const { type } = useParams()
	const [formType, setFormType] = useState(type === "register" ? type : "login")

	const toggleFormType = (params) => {
		setFormType((prevState) => (prevState === "register" ? "login" : "register"))
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3 shadow p-4">
					{formType === "register" ? (
						<>
							<h3 className="mb-4">Регистрация</h3>
							<RegisterForm />
							<p className="mt-3">
								Уже есть аккаунт?{" "}
								<a role="button" onClick={toggleFormType}>
									{" "}
									<u>Войти</u>
								</a>
							</p>
						</>
					) : (
						<>
							<h3 className="mb-4">Login</h3>
							<LoginForm />
							<p className="mt-3">
								Впервые у нас?{" "}
								<a role="button" onClick={toggleFormType}>
									{" "}
									<u>Зарегистрироваться</u>
								</a>
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Login
