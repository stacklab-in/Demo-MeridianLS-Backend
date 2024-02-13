
/**
 * @DESC Check Role Middleware
 */

const utils = require('../utils/checkPermission');
const { serverLogger } = require("../utils/loggerWinston");

module.exports.checkPermissions = () => async (req, res, next) => {
    try {
        // First Check all the permissions and then proceed with them
        const hasPermission = utils.checkPermission(req);

        if (!hasPermission) {
            return res.status(403).json({ error: "You are not authorized to perform this request!!" });
        };
        next();
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: error.message || 'Internal Server Error!' });
    }
};
