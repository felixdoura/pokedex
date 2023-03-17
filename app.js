const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require ("./routes/mainRouter")

app.use (express.static("public"))

// Configuramos ejs como template engine
app.set ("view engine", "ejs");

// Configuramos la carpeta de vistas
app.set ("views", "./views")

app.use ("/", mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log ("Servidor corriendo en el puerto " + port));

