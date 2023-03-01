const {Router} = require('express');
const { insertRuta } = require('../controller/controller');
const router = Router();

router.post('/insertRuta', insertRuta);


module.exports = router;