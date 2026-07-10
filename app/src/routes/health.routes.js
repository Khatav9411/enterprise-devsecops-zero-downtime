const express = require("express");
const router = express.Router();

const healthController = require("../controllers/health.controller");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Application Home
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Application is running
 */
router.get("/", healthController.home);

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health Check
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Health Status
 */
router.get("/health", healthController.health);

/**
 * @swagger
 * /health/db:
 *   get:
 *     summary: Database Health Check
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Database Connected
 */
router.get("/health/db", healthController.database);

/**
 * @swagger
 * /ready:
 *   get:
 *     summary: Readiness Probe
 *     tags:
 *       - Kubernetes
 */
router.get("/ready", healthController.ready);

/**
 * @swagger
 * /live:
 *   get:
 *     summary: Liveness Probe
 *     tags:
 *       - Kubernetes
 */
router.get("/live", healthController.live);

module.exports = router;