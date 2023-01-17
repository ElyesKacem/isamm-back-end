const router = require('express').Router();
const { VerifyUserToken, VerifyRole } = require("../middleware/auth");
const demandeController = require('../controllers/demande.controller');

//others
router.get('/', VerifyUserToken, demandeController.getDemande);


//alumni
router.post('/', VerifyUserToken, VerifyRole("alumni"), demandeController.insertDemande);
router.patch('/:id', VerifyUserToken,VerifyRole("alumni"), demandeController.updateDemande);
router.get('/:id', VerifyUserToken,VerifyRole("alumni"), demandeController.getDemande);
router.delete('/:id', VerifyUserToken, VerifyRole("alumni"), demandeController.deleteDemande);




module.exports = router;