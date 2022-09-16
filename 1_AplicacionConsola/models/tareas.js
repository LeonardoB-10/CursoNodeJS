const Tarea = require("./tarea");
const archivo = "./db/data.json";
var colors = require("colors/safe");

class Tareas {
  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  //Es una propeidad los metodos get y set
  get listadorArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      listado.push(this._listado[key]);
    }); //Devuelve el objeto de todas las llaves

    return listado;//me guarda todos los datos del objeto
  }


  //PARA QUE FUNCIONE RECIBE UN OBJETO 
  cargarTareasFromArray(listado = []) {
    // listado.forEach(tarea => {
    //     this._listado[tarea.id] = tarea
    // })
    ////////////////////////////////////////
    //    FELICIDADES MI HERMOSO METODO
    ////////////////////////////////////////
    for (let i = 0; i < listado.length; i++) {
      this._listado[listado[i].id] = listado[i];
    }
  }

  listadoCompleto() {
    // let contador = 0;
    // let resultado = "";

    // for (let i = 0; i < this.listadorArr.length; i++) {
    //   if (this.listadorArr[i].completado != null) {
    //     contador++;
    //     resultado += `${colors.green(contador)}. ${this.listadorArr[i].desc} :: ${colors.green("Completado")}\n`;
    //   } else {
    //     contador++;
    //     resultado += `${colors.green(contador)}. ${this.listadorArr[i].desc} :: ${colors.red("Pendiente")}\n`;
    //   }
    // }
    // return resultado;

    this.listadorArr.forEach((tarea,i) => {
      const idx = `${i+1}`.green;
      const {desc,completado} = tarea;
      const estado = (completado) ? 'Completado'.green : 'Pendiente'.red
      console.log(`${idx} ${desc} :: ${estado}`);
    })
  }


  
  listarTareasCompletadasTrue(completadosT = true) {
    // let resultado = "";
    // let contador = 0;
    // for (let i = 0; i < this.listadorArr.length; i++) {
    //   if (this.listadorArr[i].completado !== null) {
    //     if (completadosT != false) {
    //       contador++;
    //       resultado +=`${colors.green(contador)}. ${this.listadorArr[i].desc} :: ${colors.green("Completado")}\n`;
    //     }else{
    //       contador++;
    //       resultado +=`${colors.green(contador)}. ${this.listadorArr[i].desc} :: ${colors.red("Pendiente")}\n`;
    //     }
    //   }
    // }
    // return resultado;

    let contador = 0;
    this.listadorArr.forEach((tarea ) => {

      const {desc,completado} = tarea;
      const estado = (completado) ? 'Completado'.green : 'Pendiente'.red;

      if(completadosT){
        if (completado) {
          contador += 1;
          console.log(`${ (contador + '.').green } ${desc} :: ${completado.green}`);
        }
      }else{
        if(!completado){
          contador += 1;
          console.log(`${ (contador + '.').green } ${desc} :: ${estado}`);
        }
      }
    })
  }

  borrarTarea(id){
    if (this._listado[id]) {
        delete this._listado[id];
    }
  }

  //UNAS DE LAS VENTAJAS DE TRABAJAR CON UN OBJETO EN VEZ DE ARRELGO
  toggleCompletadas(ids = []){
    ids.forEach(id => {
      const tarea = this._listado[id];
      if (!tarea.completado) {
        tarea.completado = new Date().toISOString()
      }
    });

    //pregunta si en mi arreglo de id incluye el (id) registrado
    this.listadorArr.forEach(tarea =>{
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completado = null
      };
    });
  }
}
module.exports = Tareas;
