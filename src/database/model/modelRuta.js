const { Schema, model } = require('mongoose');

const ruta = new Schema(
    {
        features: {
          type: String,
          default: "Feature"
        },
        properties: {
          nombre_ruta: {
            type: String
          },
          numero_ruta: {
            type: String
          },
          color_ruta: {
            type: String
          }
        },
        geometry: {
          type: {
            type: String,
            default: "LineString"
          },
          coordinates: {
            type: [[Number]],
          }
        }
    },
    { versionKey: false, timestamps: true }
);

module.exports = model('ruta', ruta)