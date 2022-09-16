const axios = require("axios");
require("dotenv").config();
async function prueba(nombre) {
  try {
    const instace = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${nombre}.json?`,
      params: {
        access_token:
          "pk.eyJ1IjoiY2lyaWxvMTAiLCJhIjoiY2w3d3A0dnhhMGhxZzNvcWNmY3dzMHM5eiJ9.Oq8eqsSeYhdYu9kCx77LIQ",
        limit: 5,
        language: "es",
      },
    });

    const respuesta = await instace.get();
    console.log(respuesta.data.features[0].id);
    console.log(respuesta.data.features[0].place_name);
  } catch (error) {
    console.log("Error");
  }
}

// prueba('Santo Domingo');
//console.log(process.env.MAPBOX_KEY);



// climaLugares(-0.21861,-78.50972)
//console.log(climaLugares(-0.21861,-78.50972));

function myFunc(a, b, ...args) {
  console.log(a); // 22
  console.log(b); // 98
  console.log(args); // [43, 3, 26]
 };
 myFunc(22, 98, 43, 3, 26,30,80);