const { Schema, model } = require('mongoose');

const ruta = new Schema(
    {
        properties: {
          nombre_ruta: {
             type: String,
              required: true
           },
           numero_ruta: {
             type: String,
             reqired: true
           },
           color: {
             type: String,
             required: true
           },
           sentido_ruta: {
            type: String,
            required: true
           },
           region: {
            type: String,
            required: true
           },
          recorrido: {
            rec_global: {
              type: Object,
              required: true
            },
            rec_espe: {
              type: Object,
              required: true
            }
          }
        },
        geometry: {
          type: {
            type: String,
            default: "LineString"
          },
          coordinates: [{
            type: Array,
            required: true
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