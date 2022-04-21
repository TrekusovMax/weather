import React, { useEffect, useState } from "react"
import { validator } from "../../../utils/validator"
import TextField from "../../common/form/textField"
import BackHistoryButton from "../../common/backButton"
import { useDispatch, useSelector } from "react-redux"
//import { getQualities, getQualitiesLoadingStatus } from "../../../store/qualities"
import { getCurrentUserData, updateUser } from "../../../store/users"

const EditUserPage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState()
	const currentUser = useSelector(getCurrentUserData())
	const dispatch = useDispatch()

	const [errors, setErrors] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return

		dispatch(
			updateUser({
				name: e.target.name.value,
				email: e.target.email.value
			})
		)
	}

	useEffect(() => {
		if (currentUser && !data) {
			setData({ ...currentUser })
		}
	}, [currentUser, data])
	useEffect(() => {
		if (data && isLoading) {
			setIsLoading(false)
		}
	}, [data])

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
				message: "Введите ваше имя"
			}
		}
	}
	useEffect(() => validate(), [data])

	const handleChange = (target) => {
		setData((prevState) => ({
			...prevState,
			[target.name]: target.value
		}))
	}
	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}
	const isValid = Object.keys(errors).length === 0

	return (
		<div className="container mt-5">
			<BackHistoryButton />
			<div className="row">
				<div className="col-md-6 offset-md-3 shadow p-4">
					{data && (
						<form onSubmit={handleSubmit}>
							<TextField
								label="Имя"
								name="name"
								value={data.name}
								onChange={handleChange}
								error={errors.name}
							/>
							<TextField
								label="Электронная почта"
								name="email"
								value={data.email}
								onChange={handleChange}
								error={errors.email}
							/>
							<button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
								Обновить
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	)
}

export default EditUserPage
