const { v4: uuidv4 } = require('uuid');//IDENTIFICCAR DE ID

class Tarea{

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completado = null;
    }
}

module.exports = Tarea;