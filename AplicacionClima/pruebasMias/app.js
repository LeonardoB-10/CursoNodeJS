const { leerINput } = require("./inquirer")


const main = async()=>{
    const num1 = Number(await leerINput('Ingrese un numero: '))
    const num2 = Number(await leerINput('Ingrese el segundo numero: '))
    console.log(`La suma es ${num1+num2}`);
}

main()


