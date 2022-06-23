/////////////////////////////////////////////////////////////////////////////////
//El !!await!! siempre debe de estar en una funcion asicronica para que funcione  
/////////////////////////////////////////////////////////////////////////////////

async function prueba(a,b,resultado){
    let resultadoC = await resultado(a,b)
    console.log(`El resultado es: ${resultadoC}`);
    return resultadoC;
}   

async function calculo(a,b){
    return a*b;
}

const res=async()=>{
    let resultado = await prueba(5,6,calculo)
    console.log(resultado);
    return resultado;
}

res();

const datos = {
    nombre: 'Vinicio L',
    apellido: 'Borja',
    resultado(){
        return `El nombre ${nombre}, con apellido ${this.apellido}`
    }
}

const {apellido} = datos;
console.log(apellido);


const arrayLista = {
    hola : {
      "id": "a2b757ef-edce-4d92-8eb2-889dc2e17181",
      "desc": "1",
      "completado": null
    },
    hola2 : {
      "id": "6792f49a-184e-42a6-b558-1b42f546160c",
      "desc": "2",
      "completado": null
    },
    hola3: {
      "id": "5f88bea8-2e79-4eb7-89d2-d0373ac528f1",
      "desc": "dw",
      "completado": null
    }
}




for (let i = 0; i < arrayLista.length; i++) {
  const element = array[i];
  
}


const arrrelo = [a,b,c,d,f,g,h];

const desc = (dato) =>{
  console.log(dato);
}


const preguntas3 = [1,5,7,8,9,1,5,]


const recorrerDatos = (arreglo = []) => {
  const preguntasNuevas  = arreglo.map((tarea,i) => {
    console.log(i);
  })
}

desc('aaaaaaaaaa')
