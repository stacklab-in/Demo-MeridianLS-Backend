const { Schema, model } = require("mongoose");
const formSchema = require('./schemas/Inquiry');

// Define lead Schema
const leadSchema = new Schema({
    name: { type: 'string', required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    meetingScheduleDate: { type: Date },
    inquiry: {
        number: { type: String },
        place: { type: String },
        date: { type: Date },
        source: { type: String },
        form: formSchema
    },
    quotation: {},
    terms: [],
    status: { type: String, enum: ['CONFIRMED', 'PENDING', 'CANCELED'] },
    isJobcardCreated: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("Lead", leadSchema);