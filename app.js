const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv

// Mostrar siempre limpia la consola
console.clear()


// Trabajar con argumentos desde la consola
// Forma 1
// const [,,arg3 = 'base=5'] = process.argv
// const [,base = 5] = arg3.split('=')

// Forma 2
console.log(argv)

// const base = 2
// Importar nuestros propios archivos
// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo))
//     .catch(err => console.log(err))