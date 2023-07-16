const model = require("../database/model/modelRuta");
const modelPuntos = require("../database/model/modelPuntos");

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

//metodos para obtener todas las rutas existentes
const getAllRutas = async (req, res) => {
  try {
    const rutas = await model.find({});
    if (!rutas)
      return res.status(404).json({ message: "No hay rutas disponibles" });
    res.status(200).send(rutas);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const getRuta = async (req, res) => {
  try {
    const sentido = req.params.sentido.toUpperCase();
    const numeroRuta = req.params.numero;
    const region = req.params.region
    const response = await model.findOne({
      "properties.numero_ruta": numeroRuta, 
      "properties.sentido_ruta": sentido,
      "properties.region": region
    });
    if (!response) return res.status(404).json({message: 'No existe esa ruta'});
    res.status(200).send(response);
  } catch (err) {
    res.status(500).json({message: 'Error interno del servidor'});
  }
};

const getRutaColor = async (req, res) => {
  try {
    const color_ruta = req.headers.color_ruta;
    const ruta = await model.find({
      "properties.color_ruta": { $regex: new RegExp(color_ruta, "i") },
    });
    if (!ruta) return res.status(404).send("Ruta no encontrada");
    res.send(ruta);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getPuntosInteres = async (req, res) => {
  try {
    const response = await modelPuntos.find({});
    if (!response)
      return res.status(404).json({ message: "No hay puntos de interes" });
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
  }
};

module.exports = {
  insertRuta,
  getRuta,
  getRutaColor,
  getPuntosInteres,
  getAllRutas,
};
