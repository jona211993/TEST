// EN RUTAS  ES  DONDE IRA TODO EL TRABAJO DEL SERVIDOR
// DONDE SE ESTARA ESCUCHANDO LO QUE PIDA EL NAVEGADOR

const express = require('express');
const { type } = require('express/lib/response');
const { SchemaType } = require('mongoose');
const router = express.Router();
var ObjectID= require('mongodb').ObjectId;

// aqui voy a requerir mi modelo creado , en
// este caso fue el modelo Empresa
const EMPRESAS = require('../models/m_empresa');
var userid= new ObjectID("61c4a90be2898d9eeeb42e32")
// Definimos las rutas::
router.get('/', async (req,res) => {
  
  const resultado = await EMPRESAS.aggregate([
    { $match: { _id: userid } },
    {
      $lookup: {
        from: "publicaciones",
        localField: "_id",
        foreignField: "empresa_id",
        as: "sus_publicaciones"

      }
    }

  ])
  
});


module.exports = router;