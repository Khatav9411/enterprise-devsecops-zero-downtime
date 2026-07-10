const pool = require("../database/db");

exports.home = (req, res) => {
  res.status(200).json({
    application: "Enterprise DevSecOps Zero Downtime Pipeline",
    version: "1.0.0",
    status: "Running"
  });
};

exports.health = (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date(),
    service: "health"
  });
};

exports.ready = (req, res) => {
  res.status(200).json({
    ready: true
  });
};

exports.live = (req, res) => {
  res.status(200).json({
    alive: true
  });
};

exports.database = async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "UP",
      database: "Connected",
      time: result.rows[0].now
    });

  } catch (err) {

    res.status(500).json({
      status: "DOWN",
      error: err.message
    });

  }
};