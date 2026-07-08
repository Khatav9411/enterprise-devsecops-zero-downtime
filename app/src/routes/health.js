const express = require("express");
const router = express.Router();

const pool = require("../database/db");

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            status: "UP",
            database: "Connected",
            time: result.rows[0].now,
        });
    } catch (err) {
        res.status(500).json({
            status: "DOWN",
            error: err.message,
        });
    }
});

module.exports = router;