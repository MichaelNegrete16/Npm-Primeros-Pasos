const fs = require('fs')

const crearArchivo = async ( base = 5 ) => {

    try {
        
        console.log('===================')
        console.log(`----TABLA DEL ${base}----`)
        console.log('===================')

        let salida = ''

        for(let i=1 ; i<=10 ; i++){
            salida += ( `${base} x ${i} = ${base * i}\n` )
        }
        console.log(salida)

        // Grabar un archivo y guardarlo localmente en un archivo.txt
        fs.writeFileSync( `tabla-${base}.txt`, salida)

        return (`tabla-${base}.txt`)

    } catch (error) {

        throw error

    }

}

module.exports = {
    crearArchivo
}