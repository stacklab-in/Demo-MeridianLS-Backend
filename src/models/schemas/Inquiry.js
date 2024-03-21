const { Schema, model } = require("mongoose");

const inquirySchema = new Schema({
  commodity: {
    type: String,
    // required: true
  },
  hsCode: {
    type: String,
    // required: true
  },
  shipmentTerm: {
    type: String,
    // required: true
  },
  mode: {
    type: String,
    // required: true
  },
  typeOfPacking: {
    type: String,
    // required: true
  },
  numberOfPackages: {
    type: Number,
    // required: true
  },
  dimensions: [
    {
      qty: {
        type: Number,
        // required: true
      },
      length: {
        type: Number,
        // required: true
      },
      breadth: {
        type: Number,
        // required: true
      },
      height: {
        type: Number,
        // required: true
      },
      netWeight: {
        type: Number,
        // required: true
      },
      grossWeight: {
        type: Number,
        // required: true
      },
    }],
  netWeight: {
    type: Number,
  },
  grossWeight: {
    type: Number,
  },
  deliveryAddressCode: {
    type: Number,
    required: true
  },
  pickUpAddressCode: {
    type: Number,
    required: true
  },
  pickUpAddress: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  portOfLoading: {
    type: String,
  },
  portOfDischarge: {
    type: String,
  }
}, { timestamps: true, setDefaultsOnInsert: true });


module.exports = inquirySchema;
