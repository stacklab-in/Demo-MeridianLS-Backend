const User = require("../models/User");
const Jobcard = require("../models/Jobcard");
const { auditLogger, serverLogger } = require("../utils/loggerWinston");
const Lead = require("../models/Lead");
const ShipmentTracking = require("../models/ShipmentTracking");
const sendEmail = require("../utils/mailConfig");
// const sendEmail = require("../utils/mailConfig");

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const add = async (req, res) => {
    try {
        let requestBody = req.body;

        // Generate a 10-digit tracking number
        const lastJobcard = await Jobcard.findOne({}, {}, { sort: { 'createdAt': -1 } });
        const lastTrackingNumber = lastJobcard ? parseInt(lastJobcard.trackingNumber) : 2023240000;
        const trackingNumber = (lastTrackingNumber + 1).toString();

        requestBody.userId = req.user._id;
        requestBody.trackingNumber = trackingNumber;

        const lead = await Lead.findOne({ _id: requestBody.leadId });

        // Make Jobcard created true to lead
        lead.isJobcardCreated = true;
        await lead.save();


        // Create shipment tracking entry
        const shipmentTracking = await ShipmentTracking.create({
            userId: req.user._id,
            trackingNo: trackingNumber,
            statuses: [{
                value: 'Pre Shipment Doc',
                details: [{
                    location: 'Warehouse',
                    dateTime: new Date(),
                    msg: 'Shipment created',
                    exceptionalMsg: ''
                }]
            }]
        });

        if (!shipmentTracking) {
            return res.status(400).json({ error: 'Error while creating shipment tracking entry!..' })
        };

        requestBody.shipmentId = shipmentTracking._id;

        const newJobcard = await Jobcard.create(requestBody);
        console.log("🚀 ~ add ~ requestBody:", requestBody)

        if (!newJobcard) {
            return res.status(400).json({ error: 'Error while creating Jobcard!..' })
        };


        const orderDetails = {
            orderNumber: newJobcard.number,
            recipientName: lead.name,
            trackingNumber: newJobcard.trackingNumber,
            carrierName: newJobcard.carrierFlight,
            estimatedDeliveryDate: newJobcard.deliveryDate ? formatDate(newJobcard.deliveryDate) : 'N/A',
            trackingLink: "http://meridianls.co.in/tracking.html",
            shipmentStatus: 'Pre Shipment Doc',
            recipientEmail: newJobcard.quotation.clientEmail
        };


        //  Send Mail Message
        const emailResponse = sendEmail(orderDetails);

        return res.status(201).json({
            msg: 'Jobcard created successfully!..',
        });

    } catch (error) {
        console.log(error);
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const update = async (req, res) => {
    try {
        const updatedData = req.body;

        const jobcard = await Jobcard.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!jobcard) {
            return res.status(404).json({ error: 'Jobcard not found' });
        }

        // If the update is successful, you can send the updated Jobcard data in the response
        return res.status(200).json({ msg: 'Jobcard Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const query = { isDeleted: false, userId: req.user._id };
        const jobcards = await Jobcard.find(query).populate('leadId shipmentId');
        return res.status(200).json({ msg: 'Jobcards fetched successfully!.', data: jobcards });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {

        const Jobcard = await Jobcard.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!Jobcard) {
            return res.status(404).json({ error: 'Jobcard not found!..' });
        };

        Jobcard.isDeleted = true;
        await Jobcard.save();

        return res.status(200).json({ msg: 'Jobcard deleted successfully!..' })

    } catch (error) {
        console.log(error)
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    add,
    update,
    list,
    remove
};
