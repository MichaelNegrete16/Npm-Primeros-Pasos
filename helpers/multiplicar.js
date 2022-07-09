const fs = require('fs')
require('colors')

const crearArchivo = async ( base = 5 , listar) => {

    try {
        
        

        let salida = ''

        for(let i=1 ; i<=10 ; i++){
            salida += ( `${base} x ${i} = ${base * i}\n` )
        }

        if(listar){
            console.log('==================='.rainbow)
            console.log(`----TABLA DEL ${base}----`.blue)
            console.log('==================='.rainbow)

            console.log(salida)
        }

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