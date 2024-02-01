var express = require("express");
var router = express.Router();

var usuarioModel = require("./../../models/usuarioModel"); 

router.get('/', async function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});

router.post("/", async (req, res, next) => {
  try {
    var usuario = req.body.usuario; // Capturo los datos
    var password = req.body.password;

    var data = await usuarioModel.getUserByUsernameAndPassword(usuario, password); 
    if (data) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/comunidad');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
    res.render('admin/login', {
      layout: 'admin/layout',
      error: true
    });
  }
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

module.exports = router;