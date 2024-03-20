const { auditLogger, serverLogger } = require("../utils/loggerWinston");
const ShipmentTracking = require("../models/ShipmentTracking");
const Jobcard = require("../models/Jobcard");
const sendEmail = require("../utils/mailConfig");

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

const list = async (req, res) => {
    try {
        const shipments = await ShipmentTracking.find({ userId: req.user._id, isDeleted: false });
        return res.status(200).json({ msg: 'Shipments fetched successfully!.', data: shipments });
    } catch (error) {
        console.log(error);
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const update = async (req, res) => {
    try {
        const updatedData = req.body;

        const shipment = await ShipmentTracking.findOne({ userId: req.user._id, isDeleted: false, _id: req.body.id });

        if (!shipment) {
            return res.status(404).json({ error: 'shipment not found' });
        };

        const jobcard = await Jobcard.findOne({ trackingNumber: shipment.trackingNo, isDeleted: false }).populate('leadId');

        if (!jobcard) {
            return res.status(404).json({ error: 'Jobcard not found!' });
        };

        const orderDetails = {
            orderNumber: jobcard.number,
            recipientName: jobcard.leadId.name,
            trackingNumber: jobcard.trackingNumber,
            carrierName: jobcard.carrierFlight,
            estimatedDeliveryDate: jobcard.deliveryDate ? formatDate(jobcard.deliveryDate) : 'N/A',
            trackingLink: "http://meridianls.co.in/tracking.html",
            shipmentStatus: updatedData.value,
            recipientEmail: jobcard.quotation.clientEmail
        };
        //  Send Mail Message
        const emailResponse = sendEmail(orderDetails);


        if (shipment.statuses[shipment.statuses.length - 1].value === updatedData.value) {
            return res.status(400).json({ error: 'Shipment already in this status!' });
        };

        shipment.statuses.push(updatedData);
        await shipment.save();

        // If the update is successful, you can send the updated shipment data in the response
        return res.status(200).json({ msg: 'Shipment Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getShipment = async (req, res) => {
    try {
        const shipment = await ShipmentTracking.findOne({ isDeleted: false, trackingNo: req.body.trackingNumber });
        return res.status(200).json({ msg: 'Shipment fetched successfully!.', data: shipment });
    } catch (error) {
        console.log(error);
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }

};

module.exports = {
    update, list, getShipment
}