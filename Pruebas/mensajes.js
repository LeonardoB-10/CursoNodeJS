const { resolve } = require("path");

require("colors");
////////////////////////////////////////////////////////////////////
//---------------UNA FORMA DE COMO LO ARIAMOS MANUALMETNE-----------
////////////////////////////////////////////////////////////////////
const mostrarMenu = () => {

  return new Promise((resolver=>{
    console.clear();
    console.log("=========================".green);
    console.log("Selecciones una opcion".green);
    console.log("=========================\n".green);
  
    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tares`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar Tarea`);
    console.log(`${"0.".green} Salir\n`);

    //Para resivir una informacion del usuario 
    const readline = require("readline").createInterface({//readline - paquete que ya viene propio en node
      input: process.stdin,//Puasa hasta recibir algunos carateres
      output: process.stdout //para mostrar en conlasona cuadno se le pide algo al usuario
    });
  
    readline.question(`\nSeleccione una opcion: `, (opt) => {//AQUI SE LO EMPIZA A UTILIZAR
      readline.close();//Importate para que no pida de forma infinita
      // console.log({opt});
      resolver(opt);
    });
  }))
 
};


const pausa = () => {

  return new Promise((resolver=>{
      //PAQUETE QUE YA VINENE PROPIO EN NODEJS
  const readline = require("readline").createInterface({
    input: process.stdin,//Para que node pausa el rograma hasta espere de caracteres del usuario
    output: process.stdout//para mostrar un mensaje de consola al usuario
  });

  readline.question(`\nPresione ${"Enter".green} para continuar\n `, (opt) => {

    // console.log(opt);
    // console.log({opt});
    readline.close();
    resolver(opt);
  });
  }))
  
};

module.exports = {
  mostrarMenu,
  pausa
};
