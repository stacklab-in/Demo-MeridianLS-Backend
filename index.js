require("dotenv").config(); // load the environment variables
const express = require('express');
const cors = require('cors');
const endpointsDescriptor = require("express-list-endpoints-descriptor")(express);
const userRoutes = require('./src/routes/user.routes');
const roleRoutes = require('./src/routes/role.routes');
const leadRoutes = require('./src/routes/lead.routes');
const jobcardRoutes = require('./src/routes/jobcard.routes');
const shipmentRoutes = require('./src/routes/shipment.routes');

// Initialize the MongoDB connection via mongoose module
require("./src/db/db");

const app = express();

// Enable CORS for all origins and include Authorization header
app.use(cors());

// Enable BODY PARSER for all requests to parse the body data of the request
app.use(express.json());

const PORT = process.env.port;

app.use('/user', userRoutes);
app.use('/role', roleRoutes);
app.use('/lead', leadRoutes);
app.use('/jobcard', jobcardRoutes);
app.use('/shipment', shipmentRoutes);

// app.get("/endpoints", function (req, res) {
//     const transformedArray = endpointsDescriptor
//         .listAllEndpoints(app)
//         .map(route => route.path.split('/').slice(1).join('.'));
//     transformedArray.pop(); // For endpoints route

//     res.status(200).json({ msg: "All Endpoints listed", data: transformedArray });
// }
// ).descriptor({
//     name: "RBAC App API Documentation",
//     description: "This endpoint lists all the RBAC app API docuemntation.",
// });



app.listen(PORT, function () {
    console.log(`HTTP Tracking Server started on http://localhost:${PORT}`);
    // serverLogger("info", `HTTPS Server started on port ${PORT}`);
})
