const {Router} = require('express');
const { insertRuta, getRuta, getRutasPorCoordenadas, getPuntosInteres, getAllRutas, getRutasByRegion } = require('../controller/controller');
const router = Router();

router.post('/insertRuta', insertRuta);

router.get('/getruta/:sentido/:numero/:region', getRuta);

router.get('/getrutas/:region', getRutasByRegion)

router.get('/puntosinteres', getPuntosInteres);

router.get('/rutas', getAllRutas);

// router.get('/getRutasPorCoordenadas/', getRutasPorCoordenadas);

module.exports = router;
