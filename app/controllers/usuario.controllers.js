const Usuario = require("../models/usuario.models");

//Obtener todos los usuarios
// =======================================
exports.getAllUsers = (req, res) => {
    Usuario.getAll((err, usuarios) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando usuarios',
                errors: err
            });
        } else {
            res.status(200).json({
                ok: true,
                usuarios: usuarios,
            })
        }
    });
};

// Crear un nuevo usuario

exports.create = (req, res) => {

    var body = req.body;
     

    const usuario = new Usuario({
        nombre: body.nombre,
        correo: body.correo,
        rol: body.rol,
        contraseña : body.contraseña
    });
      console.log(usuario)

     
      Usuario.create(usuario, (err, data) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: "rellenar todos los campos",
                errors: err
              });
          } else {
              res.status(201).json({
                  ok: true,
                  usuario: usuario,
                  usuariotoke: req.usuario
              });
          }
      }); 
}