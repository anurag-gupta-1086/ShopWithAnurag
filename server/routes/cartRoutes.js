const express = require('express');
const router = express.Router();

const { add, get, removeFromCart } = require('../controllers/cartController');
const { auth } = require("../middlewares/auth");

router.post('/add', auth, add)
router.get('/get', auth, get)
router.get('/remove/:id', auth, removeFromCart)

module.exports = router;