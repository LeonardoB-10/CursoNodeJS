const express = require("express");
const app = express();

const { infoCursos } = require("./cursos.js");

app.get("/", (req, res) => {
  res.send(infoCursos);
});

//Se establece una ruta específica para el curso de programación
const routerProgramacion = express.Router();
app.use("/api/cursos/programacion", routerProgramacion);

//res -> Enviar respuesta al cliente
routerProgramacion.get("/", (req, res) => {
 //http://localhost:3000/api/cursos/programacion?ordenar=10
  console.log(req.query.ordenar);//10
  res.send(JSON.stringify(infoCursos.programacion));//Para mandar la informacion en formato json 
});

app.get("/api/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

//Parametros de ruta
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );
  if (resultado.length === 0) {
    return res.status(404).send("No se encontro ningun resultado");
  }

  if(req.query.ordenar === 'vistas'){
    // sort ordena de menor a mayor por defecto 
    return res.send(JSON.stringify(resultado.sort((a,b)=>a.vistas-b.vistas)));
  }
  res.send(JSON.stringify(resultado));
});

app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  //Si se cumple retorna el objeto
  const resultado = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (resultado.length === 0) {
    return res.status(404).send("No se encontro ningun resultado");
  }

  //http://localhost:3000/api/cursos/programacion/python/basico
  res.send(JSON.stringify(resultado));
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
