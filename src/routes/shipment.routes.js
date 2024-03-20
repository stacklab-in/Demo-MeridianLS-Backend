const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const shipment = require('../controllers/shipment.controller');




router.post('/update',
    auth,
    shipment.update
).descriptor({
    name: "Update a existing shipment",
    body: {
        value: 'Picked Up',
        location: 'Hinjewadi, Pune',
        dateTime: 'dateString',
        msg: 'Shipment picked up from warehouse',
        exceptionalMsg: ''
    },
});

router.post('/update-current-status',
    auth,
    shipment.updateCurrentStatus
).descriptor({
    name: "Update a current status",
    body: {
        value: 'Picked Up',
        location: 'Hinjewadi, Pune',
        dateTime: 'dateString',
        msg: 'Shipment picked up from warehouse',
        exceptionalMsg: ''
    },
});

router.post('/list',
    auth,
    shipment.list
).descriptor({
    name: "List all shipments",
});

router.post('/details',
    shipment.getShipment
).descriptor({
    name: "Get all shipments details",
});

module.exports = router;