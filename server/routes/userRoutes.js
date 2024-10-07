const express = require('express');
const router = express.Router();

const { update } = require('../controllers/userController');

router.post('/update', update)

module.exports = router;