const {Router} = require('express');
const { insertRuta, getRuta, getRutasSelector, getPuntosInteres, getAllRutas, getRutasByRegion, insertPuntosInteres } = require('../controller/controller');
const router = Router();

router.post('/insertRuta', insertRuta);

router.get('/getruta/:sentido/:numero/:region', getRuta);

router.get('/getrutas/:region', getRutasByRegion)

router.get('/getrutas', getRutasSelector)

router.get('/puntosinteres', getPuntosInteres);

router.post('/puntosinteres', insertPuntosInteres);

router.get('/rutas', getAllRutas);

// router.get('/getRutasPorCoordenadas/', getRutasPorCoordenadas);

module.exports = router;
