const express = require('express');

const router = express.Router();

const healthController = require('../controllers/health.controller');

router.get('/', healthController.home);

router.get('/health', healthController.health);

router.get('/ready', healthController.ready);

router.get('/live', healthController.live);

module.exports = router;