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

ordenarProducto('Vinicio').then((respuesta) => {//Promesa 1
    console.log('Respuesta recibida');
    console.log(respuesta);////Recuperos el mensaje de la promesa (ordenarProducto)
    return procesarPedido(respuesta);////Recuperos el mensaje de la promesa (ordenarProducto)
}).then((respuestaProcesada) => {//Promesa 2
    console.log(respuestaProcesada);
}).catch(error => {//Error
    console.log(error);
});

