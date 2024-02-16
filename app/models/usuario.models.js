const sql = require("./db");


// Constructor
const Usuario = function(usuario) {
    this.nombre = usuario.nombre;
    this.correo = usuario.correo;
    this.rol = usuario.rol;
    this.contraseña = usuario.contraseña;
}

Usuario.create = (usuarioNuevo, result) => {
    sql.query("INSERT INTO Usuario SET ?", usuarioNuevo, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }
        console.log("Usuario creado: ", { id: res.insertId, ...usuarioNuevo });
        result(null, { id: res.insertId, ...usuarioNuevo });
    });

};

Usuario.getAll = result => {
    sql.query("SELECT * FROM usuario", (err, res) => {
        if (err) {
            console.log("Error", err);
            result(null, err);
            return;
        }

        console.log("Usuario", res);
        result(null, res);
    });
};

Usuario.getAll = result => {
    sql.query("SELECT * FROM usuario", (err, res) => {
        if (err) {
            console.log("Error", err);
            result(null, err);
            return;
        }

        console.log("Usuario", res);
        result(null, res);
    });
};

module.exports = Usuario;