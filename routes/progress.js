const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const { getUserProgress, markComplete } = require('../controllers/progessController');

// Now requires a valid Firebase ID token
router.get('/', verifyToken, getUserProgress);
router.post('/complete', verifyToken, markComplete);

module.exports = router;

