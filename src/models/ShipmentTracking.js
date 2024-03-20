const mongoose = require("mongoose");

// Define the shipment tracking schema
const ShipmentTrackingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    trackingNo: { type: String, required: true, unique: true },
    statuses: [
        {
            value: { type: String, required: true },
            details: [{
                location: { type: String, required: true },
                dateTime: { type: Date, required: true },
                msg: String,
                exceptionalMsg: String
            }]
        }
    ],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("ShipmentTracking", ShipmentTrackingSchema);
