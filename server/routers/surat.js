const router = require('express').Router();
const SuratController = require('../controllers/SuratController');
const authentication = require('../middlewares/authentication');

router.post('/create', authentication, SuratController.createSurat);
router.put('/change-status/:suratId', authentication, SuratController.changeStatus);

module.exports = router;
