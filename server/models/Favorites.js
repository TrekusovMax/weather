const { Schema, model } = require("mongoose")

const schema = Schema(
	{
		city: {
			type: Array,
			required: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = model("Favorites", schema)
