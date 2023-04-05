const { Schema, model } = require('mongoose');

const ruta = new Schema(
    {
        properties: {
          nombre_ruta: {
             type: String
           },
           numero_ruta: {
             type: String
           },
           color: {
             type: String
           },
           sentido_ruta: {
            type: String
           }
        },
        geometry: {
          type: {
            type: String,
            default: "LineString"
          },
          coordinates: [{
            type: Array
          }]
        },
        type: {
          type: String,
          default: "Feature"
        }
    },
    { versionKey: false, timestamps: true }
);

module.exports = model('ruta', ruta)