const model = require('../database/model/modelRuta');
const modelPuntos = require('../database/model/modelPuntos');

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
    const id = req.headers.id;
    const ruta = await model.findById(id);
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getRutaNum = async (req, res) => {
  try {
    const numeroruta = req.headers.numeroruta;
    const ruta = await model.find({ "properties.numero_ruta": numeroruta });
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getRutaColor = async (req, res) => {
  try {
    const color_ruta = req.headers.color_ruta;
    const ruta = await model.find({ "properties.color_ruta": { $regex: new RegExp(color_ruta, "i") } });
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getPuntosInteres = async (req, res) => {
  try {
    const response = await modelPuntos.find({})
    if (!response) return res.status(404).json({message: 'No hay puntos de interes'})
    res.status(200).send(response)
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
  }
}

module.exports = {
  insertRuta,
  getRuta,
  getRutaNum,
  getRutaColor,
  getPuntosInteres
}
