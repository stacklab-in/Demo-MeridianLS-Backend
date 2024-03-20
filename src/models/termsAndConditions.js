const { Schema, model } = require("mongoose");

// Define Role Schema
const termsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true, unique: true },
    description: { type: String },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("TermsAndConditions", termsSchema);