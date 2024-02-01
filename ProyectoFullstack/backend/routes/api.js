var express = require("express");
var router = express.Router();
var comunidadModel = require ("./../models/comunidadModel")
const cloudinary = require("cloudinary").v2; //Versión 2
var nodemailer = require('nodemailer');

router.get('/comunidad', async function (req, res, next) {
    try {
      let comunidad = await comunidadModel.getComunidad(); 
  
      comunidad = comunidad.map(comentario => {
        if (comentario.img_id) { 
          const imagen = cloudinary.url(comentario.img_id, { 
            width: 70,
            height: 70,
            crop: "fill",
          });
          return {
            ...comentario,
            imagen,
          };
        } else {
          return {
            ...comentario,
            imagen: "imagen/Logo sin fondo color negro.jpg",
          };
        }
      });
  
      res.json(comunidad); //Esto es lo que REACT entiende, como se une el administrador con el front
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

router.post('/contacto', async(req,res) => {
  const mail = {
    to: 'jessicalujanc@gmail.com',
    subject: 'Contacto Web',
    html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es ${req.body.telefono}`,
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); //Cierra transp

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});

module.exports = router;
