const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const offerController = require('../controllers/offer.controller');

//others
router.get('/', VerifyUserToken, offerController.getOffer);


//alumni
router.post('/', VerifyUserToken, VerifyRole("alumni"), offerController.insertOffer);
router.patch('/:id', VerifyUserToken,VerifyRole("alumni"), offerController.updateOffer);
router.get('/:id', VerifyUserToken,VerifyRole("alumni"), offerController.getOffer);
router.delete('/:id', VerifyUserToken, VerifyRole("alumni"), offerController.deleteOffer);




module.exports = router;