const caja = {

    codigo: 100,
    descripcion: 'Caja del dia tal..',

    // completar con mas datos
    comprobantes: [{codigo:1,importe:1000,tipo:'I'},{codigo:1,importe:500,tipo:'E'}],

    // completar con mas datos
    valores: {"mil":5,"cien":45,"diez":5},

    sumaComprobantes() {

    },

    sumaValores() {

    },

    estaCerradaCierreCaja() {
        // suma de comprobantes - valores == 0
        // esta cerrada la caja
    }
}

export {caja}