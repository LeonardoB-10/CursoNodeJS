//Exportaciones necesarias
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
//Para poder leer los datos que nos envian desde el cliente
const bodyparser = require("body-parser");
//Para poder acceder a las rutas de los archivos
const path = require("path");

const {dbConnection} = require('./server/database/connection');

const app = express();
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

// log requests
//Morgan es un middleware que nos permite ver las peticiones que se hacen al servidor en la consola
app.use(morgan("tiny"));

// mongodb connection
dbConnection();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"))
// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load routers
app.use('/', require('./server/routes/router'))
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add_user", (req, res) => {    
  res.render("add_user");
});

// app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
