const { Pool } = require("pg");
const config = require("../config/config");
const logger = require("../config/logger");

const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
});

pool.on("connect", () => {
  logger.info("Connected to PostgreSQL");
});

pool.on("error", (err) => {
  logger.error(err.message);
});

module.exports = pool;