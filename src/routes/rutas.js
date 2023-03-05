const {Router} = require('express');
const { insertRuta, getRuta, getRutaNum, getRutaColor, getRutasPorCoordenadas } = require('../controller/controller');
const router = Router();

router.post('/insertRuta', insertRuta);

router.get('/getRuta/:id', getRuta)

router.get('/getRutaNum/:numero_ruta', getRutaNum)

router.get('/getRutaColor/:color_ruta', getRutaColor);

// router.get('/getRutasPorCoordenadas/', getRutasPorCoordenadas);


module.exports = router;