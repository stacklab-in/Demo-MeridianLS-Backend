const Terms = require('../models/termsAndConditions');
const Jobcard = require('../models/Jobcard');

const add = async (req, res) => {

    try {
        // Extract terms from request body
        const { terms, id } = req.body;

        if (!terms || terms.length === 0) {
            return res.status(400).json({ error: 'Please enter terms array' });
        };

        if (!id) {
            return res.status(400).json({ error: 'Please enter jobcard id!' });
        };


        // Loop through each term
        for (const term of terms) {
            // Check if the term already exists in the database
            const existingTerm = await Terms.findOne({ name: term, isDeleted: false });

            // If term does not exist, add it to the database
            if (!existingTerm) {
                await Terms.create({ name: term, userId: req.user.id }); // Assuming req.user.id contains the ID of the user
            }
        };

        const jobcard = await Jobcard.findOne({ _id: id, isDeleted: false });

        if (!jobcard) {
            return res.status(400).json({ error: 'Jobcard not found!' });
        };

        jobcard.terms = terms;

        await jobcard.save();

        // Respond with success message
        res.status(200).json({ msg: 'Terms added successfully' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};


const list = async (req, res) => {
    try {
        const terms = await Terms.find({ userId: req.user._id, isDeleted: false });
        return res.status(200).json({ msg: 'All Terms', data: terms });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
}

module.exports = { add, list };