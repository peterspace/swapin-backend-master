const express = require('express');
const router = express.Router();

const {
  getUpdatedTokensByChain,
  testApi,
} = require('../controllers/priceOneInchController.js');

//router.use(verifyJWT)

//==========================={          }===============================================
//==========================={  CREATE  }===============================================
//==========================={          }===============================================
router.route('/fetchOneInchPrices').get(getUpdatedTokensByChain);
// router.route('/testApi').get(testApi);
router.route('/testApi/:chainId').get(testApi);


module.exports = router;
