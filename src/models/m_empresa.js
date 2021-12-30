const mongoose = require('mongoose');
const { Schema } = mongoose;

const Empresa = new Schema({
  name: String,
  
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
}, { collection: 'empresas' });

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_Empresas = mongoose.model('M_Empresas', Empresa);
module.exports = M_Empresas;