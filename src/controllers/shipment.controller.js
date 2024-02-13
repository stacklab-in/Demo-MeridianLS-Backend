const { auditLogger, serverLogger } = require("../utils/loggerWinston");
const ShipmentTracking = require("../models/ShipmentTracking");

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

        if (shipment.statuses[shipment.statuses.length - 1].value === updatedData.value) {
            return res.status(400).json({ error: 'Shipment already in this status!' });
        }

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

        if (!req.body.trackingNumber) {
            return res.status(400).json({ error: 'Tracking Number is required' });
        }
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