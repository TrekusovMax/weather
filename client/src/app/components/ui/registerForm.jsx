import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/textField"

import { useDispatch } from "react-redux"

import { signUp } from "../../store/users"

const RegisterForm = () => {
	const dispatch = useDispatch()
	const [data, setData] = useState({
		email: "",
		password: "",
		name: "",
		qualities: []
	})

	const [errors, setErrors] = useState({})

	const handleChange = (target) => {
		setData((prevState) => ({
			...prevState,
			[target.name]: target.value
		}))
	}
	const validatorConfig = {
		email: {
			isRequired: {
				message: "Электронная почта обязательна для заполнения"
			},
			isEmail: {
				message: "Email введен некорректно"
			}
		},
		name: {
			isRequired: {
				message: "Имя обязательно для заполнения"
			},
			min: {
				message: "Имя должно состоять минимум из 3 символов",
				value: 3
			}
		},
		password: {
			isRequired: {
				message: "Пароль обязателен для заполнения"
			},
			isCapitalSymbol: {
				message: "Пароль должен содержать хотя бы одну заглавную букву"
			},
			isContainDigit: {
				message: "Пароль должен содержать хотя бы одно число"
			},
			min: {
				message: "Пароль должен состоять минимум из 8 символов",
				value: 8
			}
		}
	}
	useEffect(() => {
		validate()
	}, [data])
	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}
	const isValid = Object.keys(errors).length === 0

	const handleSubmit = (e) => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
		const newData = {
			...data,
			qualities: data.qualities.map((q) => q.value)
		}
		dispatch(signUp(newData))
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label="Электронная почта"
				name="email"
				value={data.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				label="Имя"
				name="name"
				value={data.name}
				onChange={handleChange}
				error={errors.name}
			/>
			<TextField
				label="Пароль"
				type="password"
				name="password"
				value={data.password}
				onChange={handleChange}
				error={errors.password}
			/>

			<button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>
				Зарегистрироваться
			</button>
		</form>
	)
}

export default RegisterForm
