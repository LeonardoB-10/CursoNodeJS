const url = new URL('https://www.ejemplo.com/cursos/programacino?ordenar=vistas&nivel=1');
console.log(url.hostname);// www.EJEMPLO.com
console.log(url.pathname);// /cursos/programacino
console.log(url.searchParams);// ?ordenar=vistas&nivel=1
console.log(url.searchParams.get('ordenar'));// ?ordenar=vistas&nivel=1
url.searchParams.set('ordenar',"Vinicio")
console.log(url.searchParams.get('ordenar'));// ?ordenar=vistas&nivel=1
