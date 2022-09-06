function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenar: ${producto} de Vinicio`);
    setTimeout(() => {
      if (producto == "Vinicio") {
        resolve("Ordenado una taza con el nombre vinicio");
      }else{
        reject('Este producto no esta disponible');
      }
    }, 2000);
  });
};

//No es necesario utilizar el reject en las promesas 
function procesarPedido(respeusta){
    return new Promise((resolve, reject)=>{
    console.log('Procesando respuesta');
    console.log(`La respuesta fue ${respeusta}`);
    setTimeout(()=>{
        resolve('Gracias por su compra. Disfrute Vinicnio');
    },4000)
    });
};


// //Se realiza eso con la finalidad que las promesas se ejecuten segun en el orde que se las llama
// ordenarProducto('Vinicio').then((respuesta) => {//Promesa 1
//     console.log('Respuesta recibida');
//     console.log(respuesta);////Recuperos el mensaje de la promesa (ordenarProducto)
//     return procesarPedido(respuesta);//Se craa una nueva funcion ansicrona
// }).then((respuestaProcesada) => {//Promesa 2
//     console.log(respuestaProcesada);//Resultado de la segunda promesa 
// }).catch(error => {//Error
//     console.log(error);
// });



async function realizarPedido(nombre){
  try{
      const respeusta = await ordenarProducto(nombre);
      console.log('Respuesta recibida');
      console.log(respeusta);////Recuperos el mensaje de la promesa (ordenarProducto) = Ordenado una taza con el nombre vinicio
      const respuetaPorcesada = await procesarPedido(respeusta);
      console.log(respuetaPorcesada);
  }catch (error){
    console.log(error);
  }
};

realizarPedido('Vinicio');