const { Schema, model } = require("mongoose");

const inquirySchema = new Schema({
  commodity: {
    type: String,
    required: true
  },
  hsCode: {
    type: String,
    required: true
  },
  shipmentTerm: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  typeOfPacking: {
    type: String,
    required: true
  },
  numberOfPackages: {
    type: Number,
    required: true
  },
  dimensions: [
    {
      qty: { type: Number, required: true },
      length: { type: Number, required: true },
      breadth: { type: Number, required: true },
      height: { type: Number, required: true },
    }],
  netWeight: {
    type: Number,
    required: true
  },
  grossWeight: {
    type: Number,
    required: true
  },
  deliveryAddressCode: {
    type: Number,
    // required: true
  },
  pickUpAddressCode: {
    type: Number,
    // required: true
  },
  pickUpAddress: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    // required: true
  },
  portOfLoading: {
    type: String,
    required: true
  },
  portOfDischarge: {
    type: String,
    required: true
  }
}, { timestamps: true, setDefaultsOnInsert: true });


module.exports = inquirySchema;
