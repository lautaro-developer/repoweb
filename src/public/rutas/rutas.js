const { Router } = require("express");
const nodemailer = require('nodemailer')
const ruta = Router();

ruta.post("/enviar_correo", (req, res) => {
  const { nombre, usuario, pass, age, mail } = req.body;
  contentHTML = `
   <h1>Informacion</h1>
   <ul>
    <li>Nombre:   ${nombre}</li>
    <li>Usuario:  ${usuario}</li>
    <li>Password: ${pass}</li>
    <li>Edad:     ${age} años</li>
    <li>Correo:   ${mail}</li>
   </ul>
  `;
  res.send(contentHTML);
});

module.exports = ruta;
