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

const getRutasByRegion = async (req, res) => {
  const region = req.params.region;
  try {
    const rutas = await model.find({"properties.region": region});
    if (!rutas) return res.status(404).json({ message: "No hay rutas disponibles" });
    const regionProperties = rutas.map(ruta => ruta.properties)
    res.status(200).send(regionProperties);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

const getRutasSelector = async (req, res) => {
  try {
    const rutas = await model.find({});
    if (!rutas) return res.status(404).json({ message: "No hay rutas disponibles" });
    const regionProperties = rutas.map(ruta => ruta.properties)
    res.status(200).send(regionProperties);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

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
  getPuntosInteres,
  getAllRutas,
  getRutasByRegion,
  getRutasSelector
};
