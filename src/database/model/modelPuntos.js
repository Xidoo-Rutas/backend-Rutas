const {Schema, model} = require('mongoose')

const puntos = new Schema({
    type: {
        type: String,
        default: 'Feature'
    },
    properties: {
        type: Object,
        default: {}
    },
    geometry: {
        coordinates: {
            type: Array
        },
        type: {
            type: String,
            default: 'Point'
        }
    },
    data: {
        titulo: {
            type: String,
            default: ''
        },
        descripcion: {
            type: String,
            default: ''
        }
    }
},
{ versionKey: false, timestamps: true }
);

module.exports = model('puntos', puntos);