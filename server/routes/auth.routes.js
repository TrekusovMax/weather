const express = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const router = express.Router({ mergeParams: true })
const { generateUserData } = require("../utils/helpers")
const tokenService = require("../services/token.service")
const { check, validationResult } = require("express-validator")

router.post("/signUp", [
	check("email", "Некореектный e-mail").isEmail(),
	check("password", "Минимальная длина пароля 8 символов").isLength({ min: 8 }),
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					error: {
						message: "INVALID_DATA",
						code: 400,
						errors: errors.array()
					}
				})
			}
			const { email, password } = req.body
			const existingUser = await User.findOne({ email })
			if (existingUser) {
				return res.status(400).json({
					error: {
						message: "EMAIL_EXISTS",
						code: 400
					}
				})
			}
			const hashedPassword = await bcrypt.hash(password, 12)

			const newUser = User.create({
				...generateUserData(),
				...req.body,
				password: hashedPassword
			})

			const tokens = tokenService.generate({ _id: newUser._id })
			res.status(201).send({ ...tokens, userId: newUser._id })
		} catch (error) {
			res.status(500).json({
				message: "На сервере произошла ошибка. Попробуйте позже"
			})
		}
	}
])
router.post("/signInWithPassword", [
	check("email", { message: "Email некорректный" }).normalizeEmail().isEmail(),
	check("password", { message: "Пароль не может быть пустым" }).exists(),
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: {
						message: "INVALID_DATA",
						code: 400,
						errors: errors.array()
					}
				})
			}

			const { email, password } = req.body
			const existingUser = await User.findOne({ email })
			if (!existingUser) {
				res.status(400).send({
					error: {
						message: "EMAIL_NOT_FOUND",
						code: 400,
						errors: errors.array()
					}
				})
			}
			console.log(password)
			console.log(existingUser.password)
			const isPasswordEqual = await bcrypt.compare(password, existingUser.password)
			if (!isPasswordEqual) {
				res.status(400).send({
					error: {
						message: "INVALID_PASSWORD",
						code: 400,
						errors: errors.array()
					}
				})
			}

			const tokens = tokenService.generate({ _id: existingUser._id })
			await tokenService.save(existingUser._id, tokens.refreshToken)
			res.status(200).send({ ...tokens, userId: existingUser._id })
		} catch (error) {
			res.status(500).json({
				message: "На сервере произошла ошибка. Попробуйте позже",
				error: error
			})
		}
	}
])

function isTokenInvalid(data, dbToken) {
	return !data || !dbToken || data._id !== dbToken?.user?.toString()
}
router.post("/token", async (req, res) => {
	try {
		const { refresh_token: refreshToken } = req.body
		const data = tokenService.validateRefresh(refreshToken)
		const dbToken = await tokenService.findToken(refreshToken)
		if (isTokenInvalid(data, dbToken)) {
			return res.code(401).json({
				message: "Unauthorized",
				code: 401,
				errors: errors.array()
			})
		}

		const tokens = await tokenService.generate({
			id: data._id
		})
		await tokenService.save(data._id, tokens.refreshToken)
		res.status(200).send({ ...tokens, userId: data._id })
	} catch (error) {
		res.status(500).json({
			message: "На сервере произошла ошибка. Попробуйте позже"
		})
	}
})

module.exports = router
