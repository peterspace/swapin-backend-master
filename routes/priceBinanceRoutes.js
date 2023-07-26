const express = require('express');
const router = express.Router();

const {
  getUpdatedTokensByChain,
  testApi,
  priceList,
  fullPriceList,
  updatedFullPriceList,
} = require('../controllers/priceBinanceController.js');

//router.use(verifyJWT)

//==========================={          }===============================================
//==========================={  CREATE  }===============================================
//==========================={          }===============================================
router.route('/fetchBinancePrices').post(getUpdatedTokensByChain);
router.route('/testApi/:chainId').get(testApi);
router.route('/priceList').get(priceList);
router.route('/fullPriceList/:chainId').get(fullPriceList);
router.route('/updatedFullPriceList/:chainId').get(updatedFullPriceList);

module.exports = router;
