const {Router} = require('express');
const { insertRuta, getRuta, getRutaNum, getRutaColor, getRutasPorCoordenadas, getPuntosInteres } = require('../controller/controller');
const router = Router();

router.post('/insertRuta', insertRuta);

router.get('/getRuta', getRuta);

router.get('/getRutaNum', getRutaNum);

router.get('/getRutaColor', getRutaColor);

router.get('/puntosinteres', getPuntosInteres)

// router.get('/getRutasPorCoordenadas/', getRutasPorCoordenadas);

module.exports = router;
