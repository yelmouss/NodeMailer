const express = require('express');
const router = express.Router();

const MailingController = require('../Controllers/MailingController');


router.post('/', MailingController.sendEmail);


module.exports = router;