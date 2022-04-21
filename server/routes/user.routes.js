const express = require("express")
const User = require("../models/User")
const auth = require("../middleware/auth.middleware")
const router = express.Router({ mergeParams: true })

router.patch("/:userId", auth, async (req, res) => {
	try {
		const { userId } = req.params

		if (userId === req.user._id) {
			const user = await User.findById(userId, req.body, { new: true })
			console.log(req.body)
			const isFavorite = user.favorites?.some((city) => city.toString() === req.body?.favorites)
			console.log(isFavorite)

			if (isFavorite) {
				const updatedUser = await User.findByIdAndUpdate(userId, { $pull: req.body }, { new: true })
				res.send(updatedUser)
			} else if (typeof isFavorite === "undefined") {
				const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true })
				res.send(updatedUser)
			} else {
				const updatedUser = await User.findByIdAndUpdate(userId, { $push: req.body }, { new: true })
				res.send(updatedUser)
			}
		} else {
			res.status(401).json({ message: "Unauthorized" })
		}
	} catch (e) {
		console.log(e.message)
		res.status(500).json({
			message: "На сервере произошла ошибка. Попробуйте позже"
		})
	}
})

router.get("/", auth, async (req, res) => {
	try {
		const list = await User.find()
		res.send(list)
	} catch (e) {
		res.status(500).json({
			message: "На сервере произошла ошибка. Попробуйте позже"
		})
	}
})

module.exports = router
