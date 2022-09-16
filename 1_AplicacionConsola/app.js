/////////////////////////////////////////////////////////////////////////////////
//El !!await!! siempre debe de estar en una funcion asicronica para que funcione
/////////////////////////////////////////////////////////////////////////////////

require("colors"); //DE  PREFERENCIA SIEMPRE PRIMERO

const { guardarDB,leerDB } = require("./helpers/guardarArchivo");
const { inquiereMenu,
   pausa,
   leerINput,
   listadoTareasBorrar,
   confirmar,
   mostrarListadoCheclinks
   } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async () => {
  const tareas = new Tareas();
  const tareasDB =  leerDB();
  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
  }
  
  // await pausa();
  let opt = "";
  do {
    //Imprimir le menu
    opt = await inquiereMenu();

    switch (opt) {
      case "1":
        const desc = await leerINput('Descripcion: ');
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log( tareas.listadoCompleto());
        break;

      case "3":
        console.log(tareas.listarTareasCompletadasTrue(true));
        break;
      case "4":
        console.log(tareas.listarTareasCompletadasTrue(false));
        break;
      case "5":
        const check = await mostrarListadoCheclinks(tareas.listadorArr);
        tareas.toggleCompletadas(check)
        break;
      case "6":
        //importante el await -> para que no se vulva a construir el menu
        const id = await listadoTareasBorrar(tareas.listadorArr);
        //TODO: preguntar si esta seguro
        if (id != 0) {
          const ok = await confirmar('¿Está seguro?')
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea borrada');
          }
        }
        break;
    }

    guardarDB(tareas.listadorArr);//LITERAL AQUI GUARDO TODOS LOS DATOS DE MEMORIA
    await pausa();
  } while (opt !== "0");
};

main();
