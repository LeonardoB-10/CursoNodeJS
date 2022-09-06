const promesaCumplida = false;

const miPromesa  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            //si se cumple la promesa se ejecuta el resolve y se envia el mensaje de promesa cumplida
            resolve('Promesa cumplida');
        }else{
            // si no se cumple la promesa se ejecuta el reject y se envia el mensaje de promesa no cumplida
            reject('Promesa no cumplida');
        }
    },3000);
});

// const resultadoCorrecto = (resultado)=>{
//     console.log(resultado);
// }

// const resultadoIncorrecto = (error)=>{
//     console.log(error);
// }

// miPromesa.then((resultadoCorrecto,resultadoIncorrecto));

miPromesa.then((resultado)=>{
    console.log(resultado);
}).then(null,(error)=>{
    console.log(error);
});

