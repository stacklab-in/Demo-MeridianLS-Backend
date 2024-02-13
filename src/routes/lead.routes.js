const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const { checkPermissions } = require('../middlewares/checkPermissions');
const lead = require('../controllers/lead.controller');


// Leads
router.post('/add',
    auth,
    lead.add
).descriptor({
    name: "Add a Lead",
    body: {},
});

router.post('/update',
    auth,
    lead.update
).descriptor({
    name: "Update a existing Lead",
    body: {},
});

router.post('/list',
    auth,
    lead.list
).descriptor({
    name: "List all Leads",
});

router.post('/delete',
    auth,
    lead.remove
).descriptor({
    name: "Delete Lead by its id",
});

module.exports = router;