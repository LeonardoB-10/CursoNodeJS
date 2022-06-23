//IMPORATANTE LE ARCHIVO SE TIENE QUE LLMAR .ENV 
require('dotenv').config()


const { leerINput, inquiereMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busqueda = require('./models/busquedas');
require("colors"); //DE  PREFERENCIA SIEMPRE PRIMERO





const main = async()=>{//FUNCION PRINCIPAL
    
    const busqueda = new Busqueda();
    let opt = 0;
    
    do{
        opt = await inquiereMenu();//LLAMA A LA FUNCION INQUIERE MENU
        
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerINput('Ciduad: ');//LLAMA A LA FUNCION LEER INPUT
                
                //Buscar lugares
                const lugares = await busqueda.ciudad(termino);//LLAMA A LA FUNCION CIUDAD
                const id = await listarLugares(lugares);//LLAMA A LA FUNCION LISTAR LUGARES
              
                const lugarSeleccionado = lugares.find(lugar => lugar.id === id);//BUSCA EL LUGAR SELECCIONADO
                console.log(lugarSeleccionado);
                //Seleccionar un lugar
                
                //Clima 
                
                
                //Mostrar resultados
                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Ciudad: ',lugarSeleccionado.nombre);
                console.log('Lat: ',lugarSeleccionado.lat);
                console.log('Long: ',lugarSeleccionado.long);
                console.log('Temperatura: ');
                console.log('Minima:' );
                
                // const texto = await leerINput("Ingrese pais a buscar: ");
                // console.log(texto);
                await pausa();
                break;
                default:
                    break;
                }
                await pausa();//LLAMA A LA FUNCION PAUSA
            }while (opt != 0);
        }
        
        
        main()
//console.log(process.env.MAPBOX_KEY);//IMPRIME LA VARIABLE DE ENTORNO 