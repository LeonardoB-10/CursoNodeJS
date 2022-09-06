const http = require('http');


const servidor = http.createServer((req,res)=>{
    //req sirve para leer lo que el cliente envia
    //res sirve para enviarle al cliente
    console.log('Solictud recibida');
    res.end('<h1>Hola Mundo</h1>');
});


servidor.listen(3000,()=>{
    console.log('El servidor esta corriendo en el puerto http://localhost:3000');
});