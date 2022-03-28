const { Schema, model } = require("mongoose")

const schema = Schema(
	{
		name: { type: String },
		email: { type: String, required: true, unique: true },
		password: { type: String },
		completedMeetings: Number,
		image: String,
		profession: { type: Schema.Types.ObjectId, ref: "Profession" },
		qualities: { type: Schema.Types.ObjectId, ref: "Qualitiy" },
		rate: Number,
		sex: { type: String, enum: ["male", "female", "other"] }
	},
	{
		timestamps: true
	}
)

module.exports = model("User", schema)
