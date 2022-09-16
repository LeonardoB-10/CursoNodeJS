# Funciones utilices para el tiempo
setTimeout() para ejecutar una función una vez pasado un tiempo determinado.
setImmediate() para ejecutar una función inmediatamente.
setInterval() para ejecutar una función cada cierto tiempo.

## Siempre revisar la documentación de cada función.
## Revisar la documentación de los otrs archivos READMI.

**Process.argv**  <br>
Es un array de strings que contiene los argumentos de la línea de comandos. El primer elemento es process.execPath. El segundo elemento es el path del archivo que se está ejecutando. Los siguientes elementos serán cualquier argumento adicional..

**Modele fs** <br>
https://www.w3schools.com/nodejs/nodejs_filesystem.asp
Todos los metodos de este modulo son asincronos.
FileSystem permite leer, escribir, crear, eliminar y renombrar archivos y directorios.
File system (fs) es un módulo de Node.js que permite interactuar con el sistema de archivos.
 permite trabajar con el sistema de archivos de la computadora en la que se ejecuta el código.

**Crear archivo npm**<br>
npm init - para crear el archivo package.json   
npm init -y - para crear el archivo package.json con los valores por defecto.

**JSON.Parse**<br>
json.parse() es una función de JavaScript que analiza una cadena de texto como JSON, transformándola o convirtiéndola en un objeto JavaScript.
typeof sirve para saber el tipo de dato de una variable.

**JSON**<br>
Es un formato de texto ligero para el intercambio de datos. JSON es un subconjunto de la notación literal de objetos de JavaScript. JSON es independiente del lenguaje, pero utiliza convenciones que son familiares a los programadores de la familia C, incluyendo C, C++, C#, Java, JavaScript, Perl, Python y muchos otros. Estas propiedades hacen que JSON sea un lenguaje ideal para la comunicación de datos.

**Dependencias en package.json**<br>
Las dependencias son paquetes que se instalan automáticamente cuando se instala el paquete principal. Las dependencias se especifican en el archivo package.json. Las dependencias se instalan en la carpeta node_modules.

**Ejemplo de como instalar dependencias y desistalar dependencias**<br>
npm install colors --save - para instalar dependencias
npm uninstall colors --save - para desinstalar dependencias

**Promesas**<br>
Objeto que representa el eventual resultado o error  de una operacion asincrona.

**Sevidor**<br>
Es un programa que espera a que un cliente se conecte a él para responder a sus solicitudes.

**Protocolo HTTP**<br>
Es un protocolo de comunicación que se utiliza para la transferencia de información en la World Wide Web. Es un protocolo de capa de aplicación para sistemas de distribución de documentos hipermedia y sistemas de gestión de contenidos. Es el protocolo de comunicación por el que se rige la World Wide Web.

**Protocolo**<br>
Es un conjunto de reglas que permiten a dos o más entidades comunicarse entre sí.

**Codigo de estado HTTP**<br>
Es un código numérico de tres dígitos que indica el estado de la respuesta del servidor a una solicitud HTTP.
Los códigos de estado HTTP se dividen en cinco clases: Respuestas informativas (100-199),
Respuestas satisfactorias (200-299),
Redirecciones (300-399),
Errores de los clientes (400-499) y Errores de los servidores (500-599).

**Patametros query**
Son los parametros que se envian en la url despues del signo de interrogacion.
y sirven para filtrar la informacion que se quiere obtener.

**Metodos para req**
req.params - para obtener los parametros de la url
req.query - para obtener los parametros de la url despues del signo de interrogacion
req.body - para obtener los parametros del body

**Nodemon**
Es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación node cuando se detectan cambios de archivo en el directorio.

**Express**
Es un framework de node.js que nos permite crear aplicaciones web de forma rápida y sencilla.
Características de Express:
- Rutas
- Middleware
- Plantillas
- Manejo de errores
- Integración con base de datos

**Rest**
Estilo de arquitectura de software para el diseño de servicios web. Se basa en el uso de HTTP para el intercambio de datos entre cliente y servidor. Es un estilo de arquitectura de software que define un conjunto de restricciones para crear servicios web.


**express.Router()**
Es un objeto que nos permite crear rutas para nuestra aplicación. 

**dotenv**
Es un paquete que nos permite cargar variables de entorno desde un archivo .env en nuestro proyecto.

**Comandos mas usado en git**
git pull - para traer los cambios del repositorio
git status - para ver el estado del repositorio
git log - para ver el historial de los cambios
git checkout - para cambiar de rama
git checkout -b "nombre de la rama" - para crear una rama
git branch - para ver las ramas
git branch -d "nombre de la rama" - para eliminar una rama
git merge "nombre de la rama" - para unir una rama con la rama actual
git remote -v - para ver los repositorios remotos
git remote remove origin - para eliminar el repositorio remoto


