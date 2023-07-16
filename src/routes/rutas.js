const {Router} = require('express');
const { insertRuta, getRuta, getRutaNum, getRutaColor, getRutasPorCoordenadas, getPuntosInteres, getAllRutas } = require('../controller/controller');
const router = Router();

router.post('/insertRuta', insertRuta);

router.get('/getruta/:sentido/:numero/:region', getRuta);

router.get('/getRutaColor', getRutaColor);

router.get('/puntosinteres', getPuntosInteres);

router.get('/rutas', getAllRutas);

// router.get('/getRutasPorCoordenadas/', getRutasPorCoordenadas);

module.exports = router;
