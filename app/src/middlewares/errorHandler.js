const logger = require("../config/logger");

module.exports = (err, req, res, next) => {

    logger.error(err.stack || err.message);

    // PostgreSQL duplicate key
    if (err.code === "23505") {
        return res.status(409).json({
            success: false,
            message: "Duplicate record found."
        });
    }

    // PostgreSQL foreign key
    if (err.code === "23503") {
        return res.status(400).json({
            success: false,
            message: "Invalid reference data."
        });
    }

    // PostgreSQL invalid input
    if (err.code === "22P02") {
        return res.status(400).json({
            success: false,
            message: "Invalid request parameter."
        });
    }

    // Generic server error
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

};