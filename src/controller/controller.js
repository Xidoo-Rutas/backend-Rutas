const model = require('../database/model/modelRuta');

const insertRuta = async (req, res) => {
  try {
    const ruta = req.body;
    const docs = await model.create(ruta);
    console.log(docs);
    res.status(201).send(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getRuta = async (req, res) => {
  try {
    const ruta = await model.findById(req.params.id);
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getRutaNum = async (req, res) => {
  try {
    const ruta = await model.findOne({ "properties.numero_ruta": req.params.numero_ruta });
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getRutaColor = async (req, res) => {
  try {
    const color_ruta = req.params.color_ruta;
    const ruta = await model.findOne({ "properties.color_ruta": { $regex: new RegExp(color_ruta, "i") } });
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = {
  insertRuta,
  getRuta,
  getRutaNum,
  getRutaColor
} 