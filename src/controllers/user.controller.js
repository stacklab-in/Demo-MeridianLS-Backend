const Role = require("../models/Role");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.add = async (req, res) => {
    try {

        const requestBody = req.body;

        // create a new user
        const newUser = await User.create({
            name: requestBody.name,
            email: requestBody.email,
            password: requestBody.password,
            roles: requestBody.roles,
        });

        return res.status(201).json({
            status: true,
            message: "Hurry! now you are successfully registred. Please login.",
            data: newUser
        });
    } catch (err) {
        console.error(err);
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password, isDeleted: false });

        if (!user) {
            return res.status(404).json({ error: "Invalid credentials!.." });
        };

        // Generating JWT  
        const token = jwt.sign({ userId: user._id.toString(), email: user.email, name: user.name }, process.env.APP_SECRET, { expiresIn: '7d' });

        // send response to user that Author is successfully logged in
        return res.status(200).send({ status: true, message: "User logged in successfully", data: { token, user: user } });

    } catch (err) {
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.update = async (req, res) => {
    try {
        const requestBody = req.body;

        // update the user
        const updatedUser = await User.findByIdAndUpdate(req.body.id, {
            name: requestBody.name,
            email: requestBody.email,
            password: requestBody.password,
            roles: requestBody.roles,
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                status: false,
                error: "User not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (err) {
        console.error(err);
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const userId = req.body.id;

        // delete the user
        const deletedUser = await User.findByIdAndUpdate(userId,
            {
                isDeleted: true
            }, { new: true });

        if (!deletedUser) {
            return res.status(404).json({
                status: false,
                error: "User not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "User deleted successfully",
            data: deletedUser
        });

    } catch (err) {
        console.error(err);
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.list = async (req, res) => {
    try {
        // delete the user
        const usersList = await User.find({ isDeleted: false });

        return res.status(200).json({
            status: true,
            message: "User List",
            data: usersList
        });

    } catch (err) {
        console.error(err);
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};