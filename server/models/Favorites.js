const { Schema, model } = require("mongoose")

const schema = Schema(
	{
		city: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = model("Favorites", schema)
