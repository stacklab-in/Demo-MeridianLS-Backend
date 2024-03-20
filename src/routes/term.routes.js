const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');

const terms = require('../controllers/terms.controller');

// Leads
router.post('/add', auth, terms.add).descriptor({
    name: "Add a Terms Agreement",
    body: {
        terms: []
    },
});

router.post('/list', auth, terms.list).descriptor({
    name: "List Terms Agreement",
    body: {
        terms: []
    },
});


module.exports = router;