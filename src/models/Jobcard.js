const mongoose = require('mongoose');

const overseasAgentSchema = new mongoose.Schema({
    companyName: String,
    contactPersonName: String,
    contactPersonNumber: String,
    contactPersonEmail: String,
    country: String,
    companyAddress: String,
});

const transportSchema = new mongoose.Schema({
    companyName: String,
    contactPersonName: String,
    contactPersonNumber: String,
    contactPersonEmail: String,
    city: String,
    country: String,
    companyAddress: String,
});

const jobcardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    date: String,
    trackingNumber: String,
    number: String,
    leadId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Lead' },
    inquiry: {}, // This is a placeholder; you might want to define a specific schema for it
    pickupDate: String,
    deliveryDate: String,
    quotation: {}, // This is a placeholder; you might want to define a specific schema for it
    shipmentType: String,
    shipmentSubType: String,
    importerName: String,
    supplierName: String,
    exporterName: String,
    consigneeName: String,
    mawbNo: String,
    hawbNo: String,
    mblNo: String,
    hblNo: String,
    docketNo: String,
    carrierFlight: String,
    vesselName: String,
    airplaneNumber: String,
    billOfEntryNo: String,
    shippingBillNo: String,
    containerNo: String,
    igmNo: String,
    igmDate: String,
    inwardDate: String,
    sealNo: String,
    splrNo: String,
    splrDate: String,
    overseasAgent: overseasAgentSchema,
    transport: transportSchema,
    shipmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'ShipmentTracking', required: true },
    isDeleted: { type: Boolean, default: false },
    terms: []
}, { timestamps: true });

const JobcardModel = mongoose.model('Jobcard', jobcardSchema);

module.exports = JobcardModel;
