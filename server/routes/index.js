const express = require("express")
const router = express.Router({ mergeParams: true })

// /api/auth
router.use("/auth", require("./auth.routes"))
router.use("/favorites", require("./favorites.routes"))
router.use("/user", require("./user.routes"))

module.exports = router
