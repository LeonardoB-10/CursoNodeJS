const http = require("http");
const cursos = require("./cursos.js");

const server = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return manejoSolicitudGET(req, res);
    case "POST":
      return manejoSolicitudPOST(req, res);
    default:
      console.log("Metodo no soportado");
  }
});

function manejoSolicitudGET(req, res) {
  const path = req.url;
  console.log(path);
  if (path === "/") {
    res.statusCode = 200;
    return res.end(
      "Bienvenidos a mi primer servidor y APLI creados con NODE.js"
    );
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.programacion));
  } else if (path === "/cursos/matematicas") {
    res.statusCode = 200;
    returnres.end(JSON.stringify(cursos.matematicas));
  }

  // res.statusCode = 404;
  return res.end("El curso no exite....");
}

function manejoSolicitudPOST(req, res) {
  const path = req.url;
  console.log(path);
  if (path === "/cursos/programacion") {
    res.statusCode = 200;
    return res.end(
      "(POST)Bienvenidos a mi primer servidor y APLI creados con NODE.js"
    );
  }

  // res.statusCode = 404;
  return res.end("El curso no exite....");
}

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000...");
});
