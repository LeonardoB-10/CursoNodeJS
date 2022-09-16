const axios = require("axios");
const fs = require("fs");


class Busqueda {
  historial = [];
  dbPath = './db/database.json';

  constructor() {
    this.leerDB();
  }

  get HistorialCapatalizado(){
    //Capaitalizar cada palabra
    const uppercased = this.historial.map(name => name.toUpperCase());
    return uppercased;
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
    };
  }

  get paremsWather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
    };
  }

  async ciudad(lugar = "") {
    //Realizar la peticion HTTP
    //Siempre cuado se realizar peticiones HTTP se debe usar --TRY CATCH--
    try {
      //Peticion http

      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?`,
        params: this.paramsMapbox,
      });

      const respuesta = await intance.get();

      //RETORNA UN OBJETO CON LAS PROPIEDADES QUE SE QUIEREN
      return respuesta.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lat: lugar.center[1],
        lon: lugar.center[0],
      }));
      // const respuesta = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/quito.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiY2lyaWxvMTAiLCJhIjoiY2w0cWUyZnBkMDNjMzNjcXZmOW1jbnR3aSJ9.xw2bJbt9qTl9Rfk-LXw4-A');
    } catch (error) {
      return []; //retorna un arreglo de lugares vacio
    }
  }

  async climaLugares(lat, lon) {
    try {
      const instace = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paremsWather, lat, lon },
      });

      const respuesta = await instace.get();
      const { weather, main } = respuesta.data;
      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  agergarHistorial(lugar = '') {
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return;
    }
    // this.historial = this.historial.splice(0, 5);
    //unshift agrega al inicio del arreglo
    this.historial.unshift(lugar.toLocaleLowerCase());
    // Grabar en DB
    this.guardarDB();
  }


  guardarDB() {

    const payload = {
        historial: this.historial
    };

    fs.writeFileSync( this.dbPath, JSON.stringify( payload ) );
}

  leerDB() {
    //verificar si exite en la base de datos -nos e hace nada
    if(!fs.existsSync(this.dbPath)){//En caso que no exista el archivo
      return this.historial;//DARIA ERROR EN CASO QUE EL ARCHIVO NO EXISTIERA 
  }
  
    const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    this.historial = data.historial
    console.log( data  );
    return  data ;//Re escribe el archivo con los datos que ya tenia 
  }
}

module.exports = Busqueda;
