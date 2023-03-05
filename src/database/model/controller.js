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

const findRuta = 

module.exports = {
  insertRuta
} 