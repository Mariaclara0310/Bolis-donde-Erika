const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/registro', mainController.register);

router.get('login', mainController.login);

module.exports = router;