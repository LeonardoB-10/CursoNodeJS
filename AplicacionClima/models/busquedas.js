const axios = require("axios");

class Busqueda {
    
  historial = ["Tegulsigalpa", "Madri", "San Jose"];

  constructor() {
    // this.historial = [];
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
    };
  }

  async ciudad(lugar = "") {
    //Realizar la peticion HTTP
    //Siempre cuado se realizar peticiones HTTP se debe usar --TRY CATCH--
    try {
      //Peticion http

      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}que.json?`,
        params: this.paramsMapbox,
      });

      const respuesta = await intance.get();
      return respuesta.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lat: lugar.center[1],
        long: lugar.center[0],
      }));

      // const respuesta = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/quito.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiY2lyaWxvMTAiLCJhIjoiY2w0cWUyZnBkMDNjMzNjcXZmOW1jbnR3aSJ9.xw2bJbt9qTl9Rfk-LXw4-A');
    } catch (error) {
      return []; //retorna un arreglo de lugares vacio
    }
  }
}

module.exports = Busqueda;
