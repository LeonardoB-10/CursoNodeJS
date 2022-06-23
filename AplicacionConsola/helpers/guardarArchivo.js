const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data) => {
    //El metodo solo puede guardar un string no un arreglo
    fs.writeFileSync(archivo,JSON.stringify(data));//Ojo con eso
}


//EL PROBLEMA QUE SIEMPRE SE ACTUALIZA LOS DATOS 
const leerDB =()=>{
    if(!fs.existsSync(archivo)){//En caso que no exista el archivo
        ////////////////////////////////////////////////////////////////
        return null;//DARIA ERROR EN CASO QUE EL ARCHIVO NO EXISTIERA 
         ////////////////////////////////////////////////////////////////
    }

    //SOLUCION AL PROMELAMA
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info)
    console.log( data  );
    return  data ;
}

module.exports = {
    guardarDB,
    leerDB
}