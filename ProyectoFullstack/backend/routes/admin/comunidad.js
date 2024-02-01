const express = require("express");
const router = express.Router();
const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

const comunidadModel = require("./../../models/comunidadModel");

//Get home page

router.get("/", async function (req, res, next) {
  try {
     // Verificar si el usuario está autenticado antes de mostrar la vista
    if (!req.session.nombre) {
      return res.redirect("/login"); // Redirigir a la página de inicio de sesión si no hay sesión activa
    }

    let comunidad = await comunidadModel.getComunidad();

    comunidad = await Promise.all(comunidad.map(async (comentario) => {
      // Genero un array
      if (comentario.img_id) {
        const imagen = await cloudinary.image(comentario.img_id, {
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
          imagen: ('Imagen no disponible'),
        };
      }
    }));

    res.render("admin/comunidad", {
      layout: "admin/layout",
      usuario: req.session.nombre,
      comunidad,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//Agregar un comentario

router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {  //agrega hbs
    layout: "admin/layout",
  });
});

router.post("/agregar", async (req, res, next) => {
  try {
    let img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
      const imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    } //Agrega la imagen por id dentro de cloudinary

    if (req.body.nombre && req.body.email && req.body.comentario) {
      await comunidadModel.insertComentario({
        ...req.body,
        img_id,
      }); //Se inserta todo lo agragado en el formulario
      res.redirect("/admin/comunidad");
    } else {
      res.render("admin/comunidad", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.error(error);
    res.render("admin/comunidad", {
      layout: "admin/layout",
      error: true,
      message: "No se cargó el comentario",
    });
  }
});

//Eliminar un comentario

router.get("/eliminar/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const comentario = await comunidadModel.getComentarioById(id);
    if (comentario.img_id) {
      await destroy(comentario.img_id);
    }
    await comunidadModel.deleteComentarioById(id);
    res.redirect("/admin/comunidad");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//Modificar un comentario

router.get("/modificar/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const comentario = await comunidadModel.getComentarioById(id);
    res.render("admin/modificar", {
      layout: "admin/layout",
      comentario,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/modificar", async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    // Verificar si se debe eliminar la imagen original
    borrar_img_vieja = req.body.img_delete === "1";

    // Si se proporciona una nueva imagen, cargarla y obtener el public_id
    if (!borrar_img_vieja && req.files && req.files.imagen) {
      const imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
      borrar_img_vieja = true;
    }

    // Si se debe eliminar la imagen original y se proporciona un img_original, eliminarla
    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }

    // Crear el objeto con los datos modificados
    const obj = {
      nombre: req.body.nombre,
      email: req.body.email,
      comentario: req.body.comentario,
      img_id,
    };

    // Modificar el comentario en la base de datos
    await comunidadModel.modificarComentarioById(obj, req.body.id);

    // Redirigir a la página de administración de la comunidad
    res.redirect("/admin/comunidad");
  } catch (error) {
    console.error("Error al modificar:", error);
    // Renderizar la página de modificación con un mensaje de error
    res.render("admin/modificar", {
      layout: "admin/layout",
      error: true,
      message: "Hubo un error al modificar el formulario",
    });
  }
});


module.exports = router;