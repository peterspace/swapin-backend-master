const express = require('express');
const {
  contactSupport,
  contactSales,
  contactAdmin,
  contactAutoReply,
  contactNew,
  testLink,
  getLink,
} = require('../controllers/emailController');
const router = express.Router();

router.post('/support', contactSupport);
router.post('/sales', contactSales);
router.post('/admin', contactAdmin);
router.post('/autoreply', contactAutoReply);
router.post('/new', contactNew);
router.post('/testLink,', testLink);
router.post('/getLink,', getLink);

module.exports = router;
