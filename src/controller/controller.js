const { default:mongoose }  = require("mongoose");
const express = require("../../app");
const model = require('../database/model/modelRuta');

const insertRuta = async (rutaData) => {
    const nuevaRuta = new model(rutaData);
    try {
      await nuevaRuta.save();
      console.log("La ruta ha sido guardada con éxito.");
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
    insertRuta
}