const { Schema, model } = require("mongoose");

// Define Role Schema
const roleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  permissions: {},
}, { timestamps: true });

module.exports = model("Role", roleSchema);