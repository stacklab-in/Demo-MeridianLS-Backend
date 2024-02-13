const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const { checkPermissions } = require('../middlewares/checkPermissions');
const jobcard = require('../controllers/jobcard.controller');


// jobcards
router.post('/add',
    auth,
    jobcard.add
).descriptor({
    name: "Add a jobcard",
    body: {},
});

router.post('/update',
    auth,
    jobcard.update
).descriptor({
    name: "Update a existing jobcard",
    body: {},
});

router.post('/list',
    auth,
    jobcard.list
).descriptor({
    name: "List all jobcards",
});

router.post('/delete',
    auth,
    jobcard.remove
).descriptor({
    name: "Delete jobcard by its id",
});

module.exports = router;