const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      language: { type: String, required: true, default: "en" },
      country: { type: String, required: true, default: "ca" },
    },
    {
      timestamps: true
  }
)

module.exports = mongoose.model("Profile", profileSchema);