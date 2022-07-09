const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')

// Mostrar siempre limpia la consola
console.clear()

// Importar nuestros propios archivos
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err))