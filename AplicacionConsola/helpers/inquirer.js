/////////////////////////////////////////////////////////////////////////////////
//El !!await!! siempre debe de estar en una funcion asicronica para que funcione  
/////////////////////////////////////////////////////////////////////////////////

require("colors");
const inquirer = require("inquirer");

const menuPreguntas = [//recibe un arreglode objetos
  {
    type: "list",
    name: "opcion",
    message: "Que deseas hacer?",
    choices: [
      {
        value: "1", //toma el valor obligado de ######value#######
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquiereMenu = async () => {
  console.clear();//Importante para limpiar la consola
  console.log("=========================".green);
  console.log("Selecciones una opcion".green);
  console.log("=========================\n".green);

  //Importante no olvidar las desestructurar 
  const { opcion } = await inquirer.prompt(menuPreguntas); //accesiendo a las preguntas
  console.log('\n');
  return opcion;
};


const pausa = async() => {
    
  const question = 
  [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`,
    }
  ];
  await inquirer.prompt(question)
  
};


//await leerINput('descripcion: ')
const leerINput = async(message)=>{
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value){
        if(value.length === 0){
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  ////////////////////////////////////////////
  //Entender como funciona la detruccturaicon 
  ////////////////////////////////////////////
  const  {desc}= await inquirer.prompt(question);
  return desc;
}

const listadoTareasBorrar = async( tareas = [] ) => {

  const choices = tareas.map((tarea,i)=>{
    const idx = `${i+1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`
    }
  });

  // const { id } = await inquirer.prompt(preguntas);

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar'
  });

  const preguntas = [
    {
      type:"list",
      name: "id",
      message: "Borrar",
      choices //toma el valor obligado de ######value#######
    }
  ]

  const { id } = await inquirer.prompt(preguntas);//recupero el valor de !!!value!!!!
  return id

  
}

const confirmar=async (message)=>{
  const question = [
    {
      type:'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok

}


const mostrarListadoCheclinks = async( tareas = [] ) => {

  const choices = tareas.map((tarea,i)=>{
    const idx = `${i+1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: (tarea.completado) ? true : false
    }
  });

  const preguntas = [
    {
      type:"checkbox",
      name: "ids",
      message: "Seleccione",
      choices //toma el valor obligado de ######value#######
    }
  ]

  const { ids } = await inquirer.prompt(preguntas);//recupero el valor de !!!value!!!!
  return ids

  
}
module.exports = {
  inquiereMenu,
  pausa,
  leerINput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheclinks
};
