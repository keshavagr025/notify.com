const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/user.controller');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;