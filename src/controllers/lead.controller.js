const User = require("../models/User");
const Lead = require("../models/Lead");
const { auditLogger, serverLogger } = require("../utils/loggerWinston");


const add = async (req, res) => {
    try {

        let requestBody = req.body;
        console.log("🚀 ~ add ~ requestBody:", requestBody)

        // const existingCustomer = await Vendor.findOne({ isDeleted: false, email: req.body.email });

        // if (existingCustomer) {
        //     return res.status(400).json({ error: 'Vendor already exists!..' })
        // };

        requestBody.userId = req.user._id;

        // Inquiry Number 

        // Quotation Number
        const newLead = await Lead.create(requestBody);

        if (!newLead) {
            return res.status(400).json({ error: 'Error while creating lead!..' })
        };

        return res.status(201).json({
            msg: 'Lead created successfully!..',
            //  data: newLead 
        });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const update = async (req, res) => {
    try {
        const updatedData = req.body;

        const lead = await Lead.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!lead) {
            return res.status(404).json({ error: 'lead not found' });
        }

        // If the update is successful, you can send the updated lead data in the response
        return res.status(200).json({ msg: 'Lead Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const query = { isDeleted: false, userId: req.user._id, isJobcardCreated: false };
        if (req?.body?.status) {
            query.status = { $in: req.body.status }
        };
        const leads = await Lead.find(query);
        return res.status(200).json({ msg: 'Leads fetched successfully!.', data: leads });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {

        const lead = await Lead.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!lead) {
            return res.status(404).json({ error: 'lead not found!..' });
        };

        lead.isDeleted = true;
        await lead.save();

        return res.status(200).json({ msg: 'lead deleted successfully!..' })

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
