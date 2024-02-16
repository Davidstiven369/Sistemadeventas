require('dotenv').config();
const express = require('express');
const conexion = require("./app/models/db");
const app = express();

// Analizar las solicitudes de tipo de contenido: aplicación / json
app.use(bodyParser.json());

// Analizar solicitudes de tipo de contenido: application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/usuario.routes")(app);





// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(process.env.PORT, () => {
    conexion;
    console.log('Server running on port', process.env.PORT);

});