const express = require("express");
const router = express.Router();

const healthRoute = require("./health");

router.use("/health/db", healthRoute);

router.get("/", (req, res) => {
  res.json({
    application: "Enterprise DevSecOps Zero Downtime Pipeline",
    version: "1.0.0",
    status: "Running",
  });
});

module.exports = router;